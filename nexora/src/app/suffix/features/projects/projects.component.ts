// src/app/features/projects/projects.component.ts
import {Component, inject} from '@angular/core';
import {SectionHeaderComponent} from '../../../portafolio/shared/components/section-header/section-header.component';
import {ChipComponent} from '../../../portafolio/shared/components/chip/chip.component';
import {ScrollRevealDirective} from '../../../portafolio/shared/directives/scroll-reveal.directive';
import {PortfolioDataService} from '../../../core/services/local/portfolio-data/portfolio-data.service';
import {Project} from '../../../core/tokens/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent, ChipComponent, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly data = inject(PortfolioDataService);

  gridClass(size: Project['size']): string {
    return ({featured: 'card--featured', regular: 'card--regular', half: 'card--half'})[size];
  }
}
