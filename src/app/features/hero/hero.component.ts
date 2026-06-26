import {Component, inject} from '@angular/core';
import {ProfileService} from '../../core/services/local/profile/profile.service';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  imports: [
    RevealDirective,
  ],
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  private readonly profileService = inject(ProfileService);

  // 👇 signal expuesto al template
  profile = this.profileService.profile;

  readonly WHATSAPP_NUMBER = '51946959109';
  readonly WHATSAPP_MESSAGE =
    'Hola Diego, vi tu portafolio y me gustaría conversar sobre una oportunidad profesional.';

  get whatsappUrl(): string {
    return `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(this.WHATSAPP_MESSAGE)}`;
  }

  constructor(
    private readonly _router: Router,
  ) {
  }


  goToRoute(path: string) {
    console.log(path);
    this._router.navigate([path]).then();
  }

}
