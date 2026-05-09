import { Component } from '@angular/core';
import {FooterComponent} from '../../../../shared/components/footer/footer.component';
import {NavbarComponent} from '../../../../shared/components/navbar/navbar.component';
import {SkillsComponent} from '../../skills.component';

@Component({
  selector: 'app-skills-home',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    SkillsComponent
  ],
  templateUrl: './skills-home.component.html',
  styleUrl: './skills-home.component.scss'
})
export class SkillsHomeComponent {

}
