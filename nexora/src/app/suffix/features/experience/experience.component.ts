// src/app/features/experience/experience.component.ts
import {Component, inject} from '@angular/core';
import {SectionHeaderComponent} from '../../../portafolio/shared/components/section-header/section-header.component';
import {ChipComponent} from '../../../portafolio/shared/components/chip/chip.component';
import {ScrollRevealDirective} from '../../../portafolio/shared/directives/scroll-reveal.directive';
import {PortfolioDataService} from '../../../core/services/local/portfolio-data/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent, ChipComponent, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  readonly data = inject(PortfolioDataService);
}
