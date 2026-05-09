import {Component, AfterViewInit, ElementRef} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.component.html',
  imports: [
    RevealDirective
  ],
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements AfterViewInit {

  stats = [
    {value: 5, label: 'Años de experiencia'},
    {value: 17, label: 'Proyectos entregados'},
    {value: 36, label: 'Tecnologías dominadas'},
    {value: 3, label: 'Empresas colaboradas'},
  ];

  constructor(private readonly el: ElementRef) {
  }

  ngAfterViewInit() {
    const counters = this.el.nativeElement.querySelectorAll('.stat-number');

    counters.forEach((el: HTMLElement, i: number) => {
      const target = this.stats[i].value;
      let current = 0;

      const step = target / 40;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.innerHTML = `${Math.floor(current)}<span>+</span>`;
      }, 30);
    });
  }
}
