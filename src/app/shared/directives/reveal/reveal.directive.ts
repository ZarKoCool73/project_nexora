import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[reveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit {

  constructor(private readonly el: ElementRef) {}

  ngAfterViewInit() {

    const element = this.el.nativeElement;

    element.classList.add('reveal');

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          observer.unobserve(entry.target);

        }

      });

    }, {
      threshold: 0.1
    });

    observer.observe(element);

    // Fallback para móviles
    setTimeout(() => {
      element.classList.add('visible');
    }, 300);

  }
}
