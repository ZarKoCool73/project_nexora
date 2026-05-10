import {Component} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {Experience, EXPERIENCE} from '../../core/models/experience.model';
import {Router} from '@angular/router';

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

  constructor(
    private readonly _router: Router,
  ) {
  }

  goToExp(route: string) {
    this._router.navigate(['/experience', route]).then();
  }
}
