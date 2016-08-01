import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import * as moment from 'moment';
import { DATEPICKER_DIRECTIVES } from 'ng2-bootstrap';
import { PrettifyService } from './app.prettifyService';

@Component({
    selector: 'datepicker-app',
    templateUrl:'app/datepicker.component.html',
    styleUrls:['app/themes.css', 'app/common.css'],
    directives:[DATEPICKER_DIRECTIVES,CORE_DIRECTIVES],
    providers:[PrettifyService]
})
export class DatepickerComponent {
    public title="Datepicker Component";
    public dt:Date = new Date();
    public minDate:Date = void 0;
    public maxDate:Date;
    public events:Array<any>;
    public tomorrow:Date;
    public afterTomorrow:Date;
    public formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
    public format:string = this.formats[0]; //default format
    public onlyCurrentMonth:boolean=false;
    public dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
   };
  private opened:boolean = false;

  public constructor(private prettifyService: PrettifyService) {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 3650);
    (this.maxDate=new Date()).setDate(this.maxDate.getDate()+3650);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];
    this.prettifyService.formatCode();
  }
  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }
  public today():void {
    this.dt = new Date();
  }

  public d20160606():void {
    this.dt = moment('2016-06-06', 'YYYY-MM-DD').toDate();
  }

  public disabled(date:Date, mode:string):boolean {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  }

  public open():void {
    this.opened = !this.opened;
  }

  public clear():void {
    this.dt = void 0;
  }

  public toggleMin():void {
    this.dt = new Date(this.minDate.valueOf());
  }
  public toggleMax():void{
    this.dt=new Date(this.maxDate.valueOf());
  }
}
