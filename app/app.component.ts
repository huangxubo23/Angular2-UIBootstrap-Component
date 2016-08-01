import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'home-app',
    template: `
       <h2>{{title}}</h2>
       <nav class="common-nav">
           <a class="common-nav-item mr-r-20" [routerLink]="['/home']" routerLinkActive="active">Quick Start</a>
           <a class="common-nav-item" [routerLink]="['/accordion']" routerLinkActive="active">Accordion</a>
           <a class="common-nav-item" [routerLink]="['/alerts']" routerLinkActive="active">Alerts</a>
           <a class="common-nav-item" [routerLink]="['/datepicker']" routerLinkActive="active">Datepicker</a>
           <a class="common-nav-item" [routerLink]="['/dropdown']" routerLinkActive="active">Dropdown</a>
           <a class="common-nav-item" [routerLink]="['/modals']" routerLinkActive="active">Modals</a>
           <a class="common-nav-item" [routerLink]="['/tabs']" routerLinkActive="active">Tabs</a>
           <a class="common-nav-item" [routerLink]="['/tooltip']" routerLinkActive="active">Tooltip</a>
           <a class="common-nav-item" [routerLink]="['/typeahead']" routerLinkActive="active">Typeahead</a>
       </nav>
       <router-outlet></router-outlet>
    `,
    styleUrls: ['app/common.css', 'app/app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    public viewContainerRef:any;
    public title = 'Angular2 UI-Bootstrap Components';
    public constructor(viewContainerRef:ViewContainerRef){
      this.viewContainerRef=viewContainerRef;
    }
}
