import { Component } from '@angular/core';
import {ContactComponent} from "../contact/contact.component";
import {CredentialsComponent} from "../credentials/credentials.component";
import {ExperienceComponent} from "../experience/experience.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {HeroComponent} from "../hero/hero.component";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {ProjectsComponent} from "../projects/projects.component";
import {SkillsComponent} from "../skills/skills.component";
import {StatsComponent} from "../stats/stats.component";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactComponent,
    CredentialsComponent,
    ExperienceComponent,
    FooterComponent,
    HeroComponent,
    NavbarComponent,
    ProjectsComponent,
    SkillsComponent,
    StatsComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
