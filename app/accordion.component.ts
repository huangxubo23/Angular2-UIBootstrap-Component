import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap';
import { PrettifyService } from './app.prettifyService';
// let ts= require('!!prismjs?lang=typescript!./accordion/accordion');

@Component({
    selector: 'accordion-app',
    templateUrl:'app/accordion.component.html',
    styleUrls:['app/themes.css','app/common.css'],
    directives:[ACCORDION_DIRECTIVES,CORE_DIRECTIVES,FORM_DIRECTIVES],
    providers:[PrettifyService]
})
export class AccordionComponent {
  constructor(private prettifyService: PrettifyService){
  this.prettifyService.formatCode();
  }
     public title='Accordion Component';
     public oneAtTime:boolean=true;
     public isFirstOpen:boolean=true;
     public items:Array<string> = ['Item 1', 'Item 2', 'Item 3'];
     public status:Object={
       isOpen:true,
       isDisabled:false
     };
     public groups:Array<any>=[
       {
         title:'Accordion Group Header - 1',
         content:'Accordion Group Content - 1'
       },
       {
         title:'Accordion Group Header - 2',
         content:'Accordion Group Content - 2'
       },
       {
         title:'Accordion Group Header - 3',
         content:'Accordion Group Content - 3'
       },
       {
         title:'Accordion Group Header - 4',
         content:'Accordion Group Content - 4'
       },
     ];
     public addItem():void{
       this.items.push(`Item ${this.items.length+1}`);
     }
}
