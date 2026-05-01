import {Component} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {CONTACT, Contact} from '../../core/models/contact.model';

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

  contact: Contact = CONTACT

}
