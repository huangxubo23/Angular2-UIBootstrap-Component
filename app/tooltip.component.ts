import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap';

import { PrettifyService } from './app.prettifyService';

@Component({
  selector: 'tooltip-app',
  templateUrl: 'app/tooltip.component.html',
  directives: [TOOLTIP_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [PrettifyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app/common.css'],
  styles: [`
    a {
      color: #337ab7;
    }
    a:hover,
    a:focus {
      color: #23527c;
    }
  `]

})
export class TooltipComponent {
    public dynamicTooltip:string = 'Hello, World!';
    public dynamicTooltipText:string = 'dynamic';
    public inputTooltipModel:string = null;

    constructor(private prettifyService: PrettifyService){
      this.prettifyService.formatCode();
    }
}
