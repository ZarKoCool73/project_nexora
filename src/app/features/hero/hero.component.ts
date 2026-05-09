import {Component, inject} from '@angular/core';
import {ProfileService} from '../../core/services/local/profile/profile.service';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  imports: [
    RevealDirective,
    RouterLink
  ],
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  private readonly profileService = inject(ProfileService);

  // 👇 signal expuesto al template
  profile = this.profileService.profile;

}
