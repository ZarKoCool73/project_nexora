// src/app/shared/directives/scroll-reveal.directive.ts
// Uso: <div appScrollReveal> → agrega clase .in cuando entra al viewport
import {
  Directive, ElementRef, Input,
  OnInit, OnDestroy
} from '@angular/core';

@Directive({
  selector:   '[appScrollReveal]',
  standalone: true,
  host: { class: 'rv' }, // aplica la clase CSS .rv automáticamente
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() rvDelay = 0; // ms de delay adicional por elemento

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.el.nativeElement.classList.add('in');
          }, this.rvDelay);
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
