import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap'
import { PrettifyService } from './app.prettifyService';

@Component({
  selector: 'dropdown-app',
  templateUrl: 'app/dropdown.component.html',
  styleUrls: ['app/themes.css', 'app/common.css'],
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
  providers:[PrettifyService]
})
export class DropdownComponent {
  constructor(private prettifyService: PrettifyService){
  this.prettifyService.formatCode();
  }
  public title = 'Dropdown Component';
  public disabled: boolean = false;
  public simpleOpen:boolean=false;
  public status: {isopen: boolean} = {isopen: false};
  public items: Array < string >= ['The first choice', 'And another choice for you.', 'but wait! A third!'];
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  public toggled(open:boolean):void{
    this.simpleOpen=open;
  }
}
