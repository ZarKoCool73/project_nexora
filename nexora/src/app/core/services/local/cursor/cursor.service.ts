// src/app/core/services/cursor.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CursorService {

  x = signal(0);
  y = signal(0);

  ringX = signal(0);
  ringY = signal(0);

  updatePosition(x: number, y: number) {
    this.x.set(x);
    this.y.set(y);

    // efecto suavizado (igual que tu JS)
    const rx = this.ringX() + (x - this.ringX()) * 0.15;
    const ry = this.ringY() + (y - this.ringY()) * 0.15;

    this.ringX.set(rx);
    this.ringY.set(ry);
  }
}
