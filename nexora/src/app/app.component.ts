// src/app/app.component.ts
import {
  Component, OnInit, inject,
  ElementRef, ViewChild, AfterViewInit, PLATFORM_ID
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {NavComponent} from './portafolio/layout/nav/nav.component';
import {FooterComponent} from './portafolio/layout/footer/footer.component';
import {HeroComponent} from './suffix/features/hero/hero.component';
import {StatStripComponent} from './portafolio/shared/components/stat-strip/stat-strip.component';
import {SkillsComponent} from './suffix/features/skills/skills.component';
import {ProjectsComponent} from './suffix/features/projects/projects.component';
import {ExperienceComponent} from './suffix/features/experience/experience.component';
import {ContactComponent} from './suffix/features/contact/contact.component';
import {ThemeService} from './core/services/local/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    HeroComponent,
    StatStripComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('cursor') cursorEl!: ElementRef<HTMLDivElement>;
  @ViewChild('cursorRing') cursorRingEl!: ElementRef<HTMLDivElement>;

  private platformId = inject(PLATFORM_ID);
  private theme = inject(ThemeService); // inicializa el servicio en arranque

  private mx = 0;
  private my = 0;
  private rx = 0;
  private ry = 0;

  ngOnInit(): void {
    // ThemeService.constructor() ya aplicó el tema al <html>
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const cur = this.cursorEl.nativeElement;
    const ring = this.cursorRingEl.nativeElement;

    // Posición exacta del dot
    document.addEventListener('mousemove', (e: MouseEvent) => {
      this.mx = e.clientX;
      this.my = e.clientY;
      cur.style.left = `${this.mx}px`;
      cur.style.top = `${this.my}px`;
    });

    // Ring con lag suave
    const animate = () => {
      this.rx += (this.mx - this.rx) * 0.12;
      this.ry += (this.my - this.ry) * 0.12;
      ring.style.left = `${this.rx}px`;
      ring.style.top = `${this.ry}px`;
      requestAnimationFrame(animate);
    };
    animate();
  }
}
