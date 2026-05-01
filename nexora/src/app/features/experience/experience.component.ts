import {Component} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {Experience, EXPERIENCE} from '../../core/models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    RevealDirective
  ],
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences: Experience[] = EXPERIENCE

}
