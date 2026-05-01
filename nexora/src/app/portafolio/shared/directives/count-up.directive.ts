// src/app/shared/directives/count-up.directive.ts
// Uso: <span appCountUp [countTo]="10" [suffix]="'+'">
import {
  Directive, ElementRef, Input,
  OnInit, OnDestroy
} from '@angular/core';

@Directive({
  selector:   '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input() countTo  = 0;
  @Input() suffix   = '';
  @Input() duration = 1400; // ms

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.#animate();
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.6 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  #animate(): void {
    const steps    = 50;
    const interval = this.duration / steps;
    const step     = this.countTo / steps;
    let   current  = 0;

    const timer = setInterval(() => {
      current = Math.min(current + step, this.countTo);
      this.el.nativeElement.textContent =
        Math.floor(current) + this.suffix;
      if (current >= this.countTo) clearInterval(timer);
    }, interval);
  }
}
