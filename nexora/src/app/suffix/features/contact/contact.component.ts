// src/app/features/contact/contact.component.ts
import {Component, inject} from '@angular/core';
import {ScrollRevealDirective} from '../../../portafolio/shared/directives/scroll-reveal.directive';
import {PortfolioDataService} from '../../../core/services/local/portfolio-data/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly data = inject(PortfolioDataService);
}
