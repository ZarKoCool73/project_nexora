import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {Skill, skills} from '../../core/models/skill.model';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  imports: [
    RevealDirective
  ],
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {

  skills: Skill[] = skills

  constructor(private readonly el: ElementRef) {
  }

  selectedSkill: Skill | null = null;

  selectSkill(skill: Skill) {
    this.selectedSkill = skill;
  }

  clearSkill() {
    this.selectedSkill = null;
  }

  ngAfterViewInit() {
    const bars = this.el.nativeElement.querySelectorAll('.skill-bar-fill');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const width = el.style.width;
          el.style.width = '0';
          setTimeout(() => el.style.width = width, 200);
          observer.unobserve(el);
        }
      });
    }, {threshold: 0.5});

    bars.forEach((bar: HTMLElement) => observer.observe(bar));
  }

}
