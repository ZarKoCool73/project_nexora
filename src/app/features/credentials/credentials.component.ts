import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';
import {Credential, credentials, CertGroup, categoryIcons, categoryOrder} from '../../core/models/credentials.models';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credentials',
  standalone: true,
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss'],
  imports: [RevealDirective, SlicePipe],
})
export class CredentialsComponent implements OnInit {

  credentials: Credential[] = credentials;

  titulos: Credential[] = [];
  diplomas: Credential[] = [];
  certGroups: CertGroup[] = [];
  categoryIcons = categoryIcons
  categoryOrder = categoryOrder

  // ── Refs de scroll ─────────────────────────────────────────────────────────
  @ViewChildren('titulosScroll')   titulosScroll!:   QueryList<ElementRef>;
  @ViewChildren('diplomasScroll')  diplomasScroll!:  QueryList<ElementRef>;
  @ViewChildren('certGroupScroll') certGroupScrolls!: QueryList<ElementRef>;

  constructor(
    private readonly _router: Router,
  ) {}

  // ── Lifecycle ──────────────────────────────────────────────────────────────
  ngOnInit(): void {
    this.titulos    = this.sortAndFilter(['Título', 'Colegiatura']);
    this.diplomas   = this.sortAndFilter(['Diploma']);
    this.certGroups = this.buildCertGroups();
  }

  // ── Navegación ─────────────────────────────────────────────────────────────
  openCert(cert: Credential): void {
    this._router.navigate(['/credentials', cert.idCredential]);
  }

  // ── Scroll: Títulos ────────────────────────────────────────────────────────
  scrollTitulos(direction: 'prev' | 'next'): void {
    this.scrollContainer(this.titulosScroll.first?.nativeElement, direction);
  }

  // ── Scroll: Diplomas ───────────────────────────────────────────────────────
  scrollDiplomas(direction: 'prev' | 'next'): void {
    this.scrollContainer(this.diplomasScroll.first?.nativeElement, direction);
  }

  // ── Scroll: Grupos de certificados ────────────────────────────────────────
  scrollGroup(groupIndex: number, direction: 'prev' | 'next'): void {
    const containers = this.certGroupScrolls.toArray();
    this.scrollContainer(containers[groupIndex]?.nativeElement, direction);
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  private scrollContainer(el: HTMLElement | undefined, direction: 'prev' | 'next'): void {
    if (!el) return;
    const cardWidth   = el.querySelector('.credential-card')?.clientWidth ?? 300;
    const gap         = 24; // igual al gap del CSS
    const scrollAmount = cardWidth + gap;
    el.scrollBy({
      left:     direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }

  private sortAndFilter(types: Credential['type'][]): Credential[] {
    return this.credentials
      .filter(c => types.includes(c.type))
      .sort((a, b) => {
        // 1. priority primero
        if ((a.priority ?? false) !== (b.priority ?? false)) {
          return (b.priority ? 1 : 0) - (a.priority ? 1 : 0);
        }
        // 2. fecha descendente
        return b.date - a.date;
      });
  }

  private buildCertGroups(): CertGroup[] {
    const certs = this.sortAndFilter(['Certificado']);

    return this.categoryOrder
      .map(cat => ({
        label: cat,
        icon:  this.categoryIcons[cat],
        items: certs.filter(c => c.category === cat),
      }))
      .filter(g => g.items.length > 0);
  }
}
