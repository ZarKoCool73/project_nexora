import {Component, inject} from '@angular/core';
import {CountUpDirective} from '../../directives/count-up.directive';
import {ScrollRevealDirective} from '../../directives/scroll-reveal.directive';
import {PortfolioDataService} from '../../../../core/services/local/portfolio-data/portfolio-data.service';

@Component({
  selector: 'app-stat-strip',
  standalone: true,
  imports: [CountUpDirective, ScrollRevealDirective],
  templateUrl: 'stat-strip.component.html',
  styleUrl: 'stat-strip.component.scss',
})
export class StatStripComponent {
  readonly data = inject(PortfolioDataService);
}
