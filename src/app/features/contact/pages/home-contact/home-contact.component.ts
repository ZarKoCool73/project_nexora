import { Component } from '@angular/core';
import {FooterComponent} from "../../../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../../../shared/components/navbar/navbar.component";
import {ContactComponent} from '../../contact.component';

@Component({
  selector: 'app-home-contact',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    ContactComponent
  ],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss'
})
export class HomeContactComponent {

}
