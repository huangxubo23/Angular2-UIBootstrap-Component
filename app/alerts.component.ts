import { Component } from '@angular/core';
import { CORE_DIRECTIVES  } from '@angular/common';
import { AlertComponent } from 'ng2-bootstrap';

import { PrettifyService } from './app.prettifyService';

@Component({
    selector: 'alerts-app',
    templateUrl: 'app/alerts.component.html',
    directives: [AlertComponent, CORE_DIRECTIVES],
    styleUrls: ['app/themes.css', 'app/common.css'],
    providers: [PrettifyService]
})
export class AlertsComponent {
  constructor(private prettifyService: PrettifyService){
    this.prettifyService.formatCode();
  }

  public alerts:Array<Object> = [
      {
        type: 'danger',
        message: 'Alert type: danger, closable: false',
        closable: false,
        dismissTime: 0
      },
      {
        type: 'success',
        message: 'Alert type: success, closable: true',
        closable: true,
        dismissTime: 0
      },
      {
        type: 'success',
        message: 'Alert type: success, closable: true, dismissTime: 5s.',
        closable: true,
        dismissTime: 5000
      },
      {
        type: 'info',
        message: 'Alert type: info, closable: true',
        closable: true,
        dismissTime: 0
      },
      {
        type: 'warning',
        message: 'Alert type: warning, closable: true',
        closable: true,
        dismissTime: 0
      }
    ];

    public closeAlert(i:number):void {
      this.alerts.splice(i, 1);
    }

    public alertObj = {
      message: 'This is an example message of new alert.',
      type: 'warning',
      closable: 'true',
      dismissTime: 0
    }

    public addAlert():void {
      //this.alertObj.closable = (this.alertObj.closable == true || this.alertObj.closable == 'true');
      this.alertObj.dismissTime < 0 ? this.alertObj.dismissTime = 0 : this.alertObj.dismissTime;

      this.alerts.push({
        message: this.alertObj.message,
        type: this.alertObj.type,
        closable: this.alertObj.closable === 'true',
        dismissTime: this.alertObj.dismissTime * 1000
      });
    }
}
