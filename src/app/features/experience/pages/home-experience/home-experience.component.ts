import { Component } from '@angular/core';
import {FooterComponent} from "../../../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../../../shared/components/navbar/navbar.component";
import {ExperienceComponent} from '../../experience.component';

@Component({
  selector: 'app-home-experience',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    ExperienceComponent
  ],
  templateUrl: './home-experience.component.html',
  styleUrl: './home-experience.component.scss'
})
export class HomeExperienceComponent {

}
