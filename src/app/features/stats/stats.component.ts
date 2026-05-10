import {Component, AfterViewInit, ElementRef} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {Router} from '@angular/router';

export interface Stats {
  value: number;
  label: string;
  url: string;
}

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

  stats: Stats[] = [
    {value: 5, label: 'Años de experiencia', url: '/experience'},
    {value: 17, label: 'Proyectos entregados', url: '/projects'},
    {value: 36, label: 'Tecnologías dominadas', url: '/skills'},
    {value: 3, label: 'Empresas colaboradas', url: '/contacts'},
  ];

  constructor(
    private readonly el: ElementRef,
    private readonly _route: Router
  ) {
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

  goToRoute(stag: string) {
    this._route.navigate([stag]).then();
  }

}
