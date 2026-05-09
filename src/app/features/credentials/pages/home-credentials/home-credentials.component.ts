import { Component } from '@angular/core';
import {FooterComponent} from "../../../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../../../shared/components/navbar/navbar.component";
import {CredentialsComponent} from '../../credentials.component';

@Component({
  selector: 'app-home-credentials',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    CredentialsComponent,
  ],
  templateUrl: './home-credentials.component.html',
  styleUrl: './home-credentials.component.scss'
})
export class HomeCredentialsComponent {

}
