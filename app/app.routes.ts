import { provideRouter, RouterConfig } from '@angular/router';

import { QuickStartComponent } from './app.quickStart';
import { AccordionComponent } from './accordion.component';
import { AlertsComponent } from './alerts.component';
import { DatepickerComponent } from './datepicker.component';
import { DropdownComponent } from './dropdown.component';
import { ModalsComponent } from './modals.component';
import { TabsComponent } from './tabs.component';
import { TooltipComponent } from './tooltip.component';
import { TypeaheadComponent } from './typeahead.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: QuickStartComponent
  },
  {
    path: 'accordion',
    component: AccordionComponent
  },
  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: 'datepicker',
    component: DatepickerComponent
  },
  {
    path: 'dropdown',
    component: DropdownComponent
  },
  {
    path: 'modals',
    component: ModalsComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'typeahead',
    component: TypeaheadComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
