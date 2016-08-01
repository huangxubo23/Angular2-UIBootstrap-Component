import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { TAB_DIRECTIVES } from 'ng2-bootstrap';

import { PrettifyService } from './app.prettifyService';

@Component({
    selector: 'tabs-app',
    directives: [TAB_DIRECTIVES, CORE_DIRECTIVES],
    providers: [PrettifyService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'app/tabs.component.html',
    styleUrls: ['app/themes.css', 'app/common.css'],
    styles: [`
        .common-tab-content,
        .common-verticalTab-content {
          min-height: 200px;
          padding: 5px 10px;
          border-left: 1px solid #dbdbdb;
          border-right: 1px solid #dbdbdb;
          border-bottom: 1px solid #dbdbdb;
        }
        .common-verticalTab-content {
          border-top: 1px solid #dbdbdb;
        }
        .common-tab-content:before,
        .common-verticalTab-content:before {
          display: table;
          content: " ";
        }
        .common-tab-content:after,
        .common-verticalTab-content:after {
          clear: both;
          display: table;
          content: " ";
        }

    `]
})
export class TabsComponent {
    constructor(private prettifyService: PrettifyService){
      this.prettifyService.formatCode();
    }

    public tabs:Array<any> = [
      {title: 'Default Tab', content: 'Default Tab'},
      {title: 'Succss Tab', content: 'Succss Tab and can toggle the disabled attribute', type: 'success', disabled: true},
      {title: 'Error Tab', content: 'Error Tab', type: 'error'},
      {title: 'Info Tab', content: 'Info Tab', type: 'info'},
      {title: 'Removable Tab', content: 'Click close icon can remove current tab', removable: true}
    ];

    public alertTab():void {
      setTimeout(function ():void {
        console.log('You\'ve selected the alert tab!');
      });
    };

    public setActiveTab(index:number):void {
      this.tabs[index].active = true;
    };

    newTypeTab = 'removable';
    public addNewTab(sType:string):void {
      let newTab = {
        title: 'new Tab',
        content: 'New Tab Content',
        removable: false,
        type: 'default'
      };

      switch (sType) {
        case 'removable':
          newTab.removable = true;
          break;
        default:
          newTab.type = sType;
          break;
      }

      this.tabs.push(newTab);
    };

    public removeTabHandler(tab:any):void {
      console.log(tab.title + ' has been removed.');
    };
}
