import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {Skill} from '../../core/models/skill.model';
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

  skills: Skill[] = [
    {
      icon: '⬡',
      name: 'Frontend',
      description: 'Angular · React · TypeScript · SCSS · RxJS · NgRx',
      level: 95
    },
    {
      icon: '◈',
      name: 'Backend',
      description: 'Node.js · Spring Boot · Python · REST · GraphQL · gRPC',
      level: 90
    },
    {
      icon: '▣',
      name: 'Bases de datos',
      description: 'PostgreSQL · MongoDB · Redis · MySQL · Elasticsearch',
      level: 88
    },
    {
      icon: '◎',
      name: 'Cloud & DevOps',
      description: 'AWS · GCP · Docker · Kubernetes · CI/CD · Terraform',
      level: 82
    },
    {
      icon: '⬟',
      name: 'Arquitectura',
      description: 'Microservicios · Event-driven · DDD · CQRS · Clean Architecture',
      level: 85
    },
    {
      icon: '◇',
      name: 'Testing & QA',
      description: 'Jest · Cypress · Jasmine · Testing Library · TDD',
      level: 80
    }
  ];

  constructor(private el: ElementRef) {
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
