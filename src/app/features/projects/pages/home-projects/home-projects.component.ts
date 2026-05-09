import { Component } from '@angular/core';
import {NavbarComponent} from '../../../../shared/components/navbar/navbar.component';
import {FooterComponent} from '../../../../shared/components/footer/footer.component';
import {ProjectsComponent} from '../../projects.component';

@Component({
  selector: 'app-home-projects',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ProjectsComponent
  ],
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.scss'
})
export class HomeProjectsComponent {

}
