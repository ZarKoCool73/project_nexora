import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  templateUrl: 'cursor.component.html',
  styleUrl: 'cursor.component.scss'
})
export class CursorComponent implements OnInit{

  mouseX = 0;
  mouseY = 0;

  ringX = 0;
  ringY = 0;

  dotTransform = '';
  ringTransform = '';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    this.dotTransform = `translate3d(${this.mouseX}px, ${this.mouseY}px, 0)`;
  }

  ngOnInit() {
    this.animateRing();
  }

  animateRing() {
    const delay = 0.15;

    const animate = () => {
      this.ringX += (this.mouseX - this.ringX) * delay;
      this.ringY += (this.mouseY - this.ringY) * delay;

      this.ringTransform = `translate3d(${this.ringX}px, ${this.ringY}px, 0)`;
      requestAnimationFrame(animate);
    };

    animate();
  }
}
