import {Component, Input} from '@angular/core';
import {ScrollRevealDirective} from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent {
  @Input({required: true}) num!: string; // '01', '02'…
  @Input({required: true}) title!: string;
}
