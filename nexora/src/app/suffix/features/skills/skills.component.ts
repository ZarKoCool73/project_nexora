// src/app/features/skills/skills.component.ts
import {Component, inject, AfterViewInit} from '@angular/core';
import {SectionHeaderComponent} from '../../../portafolio/shared/components/section-header/section-header.component';
import {ScrollRevealDirective} from '../../../portafolio/shared/directives/scroll-reveal.directive';
import {PortfolioDataService} from '../../../core/services/local/portfolio-data/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  readonly data = inject(PortfolioDataService);

  ngAfterViewInit(): void {
    // Anima las barras cuando el card entra al viewport
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const fill = entry.target.querySelector<HTMLElement>('.sk-fill');
          if (fill) {
            setTimeout(() => {
              fill.style.width = fill.dataset['w'] + '%';
            }, 300);
          }
          observer.unobserve(entry.target);
        });
      },
      {threshold: 0.45}
    );

    document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));
  }
}
