import { Component, inject, HostListener, signal } from '@angular/core';
import { CommonModule }   from '@angular/common';
import {ThemeService} from '../../../core/services/local/theme/theme.service';

@Component({
  selector:   'app-nav',
  standalone: true,
  imports:    [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls:   ['./nav.component.scss'],
})
export class NavComponent {
  readonly theme = inject(ThemeService);
  readonly scrolled = signal(false);

  readonly links = [
    { label: 'Stack',       href: '#skills'     },
    { label: 'Proyectos',   href: '#projects'   },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto',    href: '#contact'    },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
