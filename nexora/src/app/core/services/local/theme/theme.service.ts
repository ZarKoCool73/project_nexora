// src/app/core/services/theme.service.ts
import { Injectable, signal, effect } from '@angular/core';
import {Theme} from '../../../tokens/portfolio.models';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly KEY = 'portfolio-theme';

  // Signal reactivo — los componentes lo leen sin subscribirse
  readonly current = signal<Theme>(this.#resolve());

  constructor() {
    // Efecto: sincroniza el signal con el DOM cada vez que cambia
    effect(() => {
      document.documentElement.dataset['theme'] = this.current();
      localStorage.setItem(this.KEY, this.current());
    });
  }

  toggle(): void {
    this.current.update(t => (t === 'dark' ? 'light' : 'dark'));
  }

  setTheme(t: Theme): void {
    this.current.set(t);
  }

  get isDark(): boolean {
    return this.current() === 'dark';
  }

  // Detecta preferencia: storage > sistema operativo > 'dark'
  #resolve(): Theme {
    const saved = localStorage.getItem(this.KEY) as Theme | null;
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }
}
