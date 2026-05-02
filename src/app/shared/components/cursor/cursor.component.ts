import { Component, HostListener, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit, OnDestroy {

  private mouseX = 0;
  private mouseY = 0;

  private ringX = 0;
  private ringY = 0;

  dotTransform = '';
  ringTransform = '';

  private rafId: number | null = null;
  private ease = 0.15;

  constructor(private ngZone: NgZone) {}

  /* 🎯 mouse real (funciona mejor que pointermove en algunos casos) */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    this.dotTransform =
      `translate3d(${this.mouseX}px, ${this.mouseY}px, 0)`;
  }

  ngOnInit() {
    /* 🔥 IMPORTANTÍSIMO: salir de Angular zone */
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  private animate = () => {
    this.ringX += (this.mouseX - this.ringX) * this.ease;
    this.ringY += (this.mouseY - this.ringY) * this.ease;

    this.ringTransform =
      `translate3d(${this.ringX}px, ${this.ringY}px, 0)`;

    this.rafId = requestAnimationFrame(this.animate);
  };

  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
