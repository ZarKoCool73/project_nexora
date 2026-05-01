import {Component} from '@angular/core';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {HeroComponent} from './features/hero/hero.component';
import {StatsComponent} from './features/stats/stats.component';
import {SkillsComponent} from './features/skills/skills.component';
import {ProjectsComponent} from './features/projects/projects.component';
import {ExperienceComponent} from './features/experience/experience.component';
import {ContactComponent} from './features/contact/contact.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {CursorComponent} from './shared/components/cursor/cursor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    CursorComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}
