import { Component, computed, signal } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';
import {
  Credential,
  credentials,
  CertGroup,
  categoryIcons,
  categoryOrder,
} from '../../core/models/credentials.models';

type FilterKey = 'type' | 'category' | 'year' | 'issuer';

interface FilterOption {
  value: string;
  label: string;
  icon?: string;
  count: number;
}

interface FilterGroup {
  key: FilterKey;
  label: string;
  options: FilterOption[];
}

interface ActiveChip {
  key: FilterKey;
  value: string;
  label: string;
}

const TYPE_ORDER: Credential['type'][] = ['Título', 'Colegiatura', 'Diploma', 'Certificado', 'Badge'];
const TITLE_TYPES: Credential['type'][] = ['Título', 'Colegiatura'];
const DIPLOMA_TYPES: Credential['type'][] = ['Diploma'];
const CERT_TYPES: Credential['type'][] = ['Certificado', 'Badge'];

@Component({
  selector: 'app-credentials',
  standalone: true,
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss'],
  imports: [RevealDirective, SlicePipe],
})
export class CredentialsComponent {

  // ── Datos base ─────────────────────────────────────────────────────────────
  readonly all: Credential[] = credentials;
  readonly total = this.all.length;

  private readonly filterKeys: FilterKey[] = ['type', 'category', 'year', 'issuer'];
  readonly filterGroups: FilterGroup[] = this.buildFilterGroups();
  private readonly searchIndex = this.buildSearchIndex();

  // ── Estado de la UI ────────────────────────────────────────────────────────
  readonly query = signal('');
  readonly onlyFeatured = signal(false);
  readonly panelOpen = signal(false);
  readonly expanded = signal<string[]>([]);
  readonly selected = signal<Record<FilterKey, string[]>>({
    type: [],
    category: [],
    year: [],
    issuer: [],
  });

  // ── Estado derivado ────────────────────────────────────────────────────────
  readonly filtered = computed<Credential[]>(() => {
    const terms = this.normalize(this.query()).split(/\s+/).filter(Boolean);
    const sel = this.selected();
    const featured = this.onlyFeatured();

    return this.all.filter(c => {
      if (featured && !c.featured) return false;

      for (const key of this.filterKeys) {
        const chosen = sel[key];
        if (chosen.length && !chosen.includes(this.fieldOf(c, key) ?? '')) return false;
      }

      if (terms.length) {
        const haystack = this.searchIndex.get(c.idCredential) ?? '';
        return terms.every(t => haystack.includes(t));
      }
      return true;
    });
  });

  readonly resultCount = computed(() => this.filtered().length);

  readonly activeCount = computed(() => {
    const sel = this.selected();
    const filters = this.filterKeys.reduce((acc, k) => acc + sel[k].length, 0);
    return filters + (this.onlyFeatured() ? 1 : 0);
  });

  readonly hasFilters = computed(() => this.activeCount() > 0 || this.query().trim().length > 0);

  readonly activeChips = computed<ActiveChip[]>(() => {
    const sel = this.selected();
    const chips: ActiveChip[] = [];
    for (const group of this.filterGroups) {
      for (const value of sel[group.key]) {
        const option = group.options.find(o => o.value === value);
        chips.push({ key: group.key, value, label: option?.label ?? value });
      }
    }
    return chips;
  });

  /** Secciones visibles (Títulos, Diplomas y una por categoría), ya filtradas. */
  readonly sections = computed<CertGroup[]>(() => {
    const items = this.filtered();
    const sections: CertGroup[] = [];

    const titulos = this.sortItems(items.filter(c => TITLE_TYPES.includes(c.type)));
    if (titulos.length) sections.push({ label: 'Títulos y Colegiatura', icon: '🎓', items: titulos });

    const diplomas = this.sortItems(items.filter(c => DIPLOMA_TYPES.includes(c.type)));
    if (diplomas.length) sections.push({ label: 'Diplomas', icon: '📜', items: diplomas });

    const certs = this.sortItems(items.filter(c => CERT_TYPES.includes(c.type)));
    for (const cat of categoryOrder) {
      const group = certs.filter(c => c.category === cat);
      if (group.length) sections.push({ label: cat, icon: categoryIcons[cat], items: group });
    }

    // Certificados sin categoría: no se pierden si olvidas asignarla
    const uncategorized = certs.filter(c => !c.category);
    if (uncategorized.length) sections.push({ label: 'Otros', icon: '📄', items: uncategorized });

    return sections;
  });

  constructor(private readonly _router: Router) {}

  // ── Navegación ─────────────────────────────────────────────────────────────
  openCert(cert: Credential): void {
    this._router.navigate(['/credentials', cert.idCredential]);
  }

  // ── Búsqueda y filtros ─────────────────────────────────────────────────────
  onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  clearSearch(): void {
    this.query.set('');
  }

  togglePanel(): void {
    this.panelOpen.update(v => !v);
  }

  toggleFeatured(): void {
    this.onlyFeatured.update(v => !v);
  }

  toggle(key: FilterKey, value: string): void {
    this.selected.update(s => ({
      ...s,
      [key]: s[key].includes(value) ? s[key].filter(v => v !== value) : [...s[key], value],
    }));
  }

  isSelected(key: FilterKey, value: string): boolean {
    return this.selected()[key].includes(value);
  }

  clearAll(): void {
    this.query.set('');
    this.onlyFeatured.set(false);
    this.selected.set({ type: [], category: [], year: [], issuer: [] });
  }

  // ── Vista: carrusel / cuadrícula por sección ───────────────────────────────
  toggleExpand(label: string): void {
    this.expanded.update(list =>
      list.includes(label) ? list.filter(l => l !== label) : [...list, label],
    );
  }

  isExpanded(label: string): boolean {
    return this.expanded().includes(label);
  }

  // ── Scroll horizontal (recibe el contenedor desde el template) ─────────────
  scroll(el: HTMLElement | undefined, direction: 'prev' | 'next'): void {
    if (!el) return;
    const cardWidth = el.querySelector('.credential-card')?.clientWidth ?? 300;
    const gap = 24; // igual al gap del CSS
    const scrollAmount = cardWidth + gap;
    el.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  private fieldOf(c: Credential, key: FilterKey): string | undefined {
    switch (key) {
      case 'type':     return c.type;
      case 'category': return c.category;
      case 'year':     return String(c.date);
      case 'issuer':   return c.issuer;
    }
  }

  private normalize(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  private buildSearchIndex(): Map<string, string> {
    const index = new Map<string, string>();
    for (const c of this.all) {
      const text = [c.title, c.issuer, c.description, c.badge, c.category, c.type, c.date]
        .filter(Boolean)
        .join(' ');
      index.set(c.idCredential, this.normalize(text));
    }
    return index;
  }

  private buildFilterGroups(): FilterGroup[] {
    const count = (key: FilterKey): Map<string, number> => {
      const map = new Map<string, number>();
      for (const c of this.all) {
        const value = this.fieldOf(c, key);
        if (value) map.set(value, (map.get(value) ?? 0) + 1);
      }
      return map;
    };

    const types   = count('type');
    const cats    = count('category');
    const years   = count('year');
    const issuers = count('issuer');

    return [
      {
        key: 'type',
        label: 'Tipo',
        options: TYPE_ORDER
          .filter(t => types.has(t))
          .map(t => ({ value: t, label: t, count: types.get(t)! })),
      },
      {
        key: 'category',
        label: 'Categoría',
        options: categoryOrder
          .filter(c => cats.has(c))
          .map(c => ({ value: c, label: c, icon: categoryIcons[c], count: cats.get(c)! })),
      },
      {
        key: 'year',
        label: 'Año',
        options: [...years.entries()]
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([value, n]) => ({ value, label: value, count: n })),
      },
      {
        key: 'issuer',
        label: 'Emisor',
        options: [...issuers.entries()]
          .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
          .map(([value, n]) => ({ value, label: value, count: n })),
      },
    ];
  }

  private sortItems(items: Credential[]): Credential[] {
    return [...items].sort((a, b) => {
      // 1. priority primero
      if ((a.priority ?? false) !== (b.priority ?? false)) {
        return (b.priority ? 1 : 0) - (a.priority ? 1 : 0);
      }
      // 2. fecha descendente
      return b.date - a.date;
    });
  }
}
