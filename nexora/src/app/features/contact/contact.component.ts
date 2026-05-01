import {Component} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: 'contact.component.html',
  imports: [
    RevealDirective
  ],
  styleUrls: ['contact.component.scss']
})
export class ContactComponent {

  contact = {
    email: 'diego.dev@gmail.com',
    phone: '+51 999 999 999',
    location: 'Lima, Perú'
  };

}
