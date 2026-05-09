import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {AppComponent} from './app/app.component';
import {routes} from './app/app.routes';
import {provideExperimentalZonelessChangeDetection} from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })
    ),
    provideExperimentalZonelessChangeDetection() // 👈 ESTO FALTABA
  ]
});
