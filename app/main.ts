import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue : '/'}),
  disableDeprecatedForms(),
  provideForms()
]);
