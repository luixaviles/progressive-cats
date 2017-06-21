import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('worker-basic.min.js')
        .then((registration) => {
          console.log('Service Worker has been registered.');
        }).catch((error) => {
          console.log('Service Worker registration has failed.');
        });
    }
  });
