import { Component ,ViewChild} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap';
import { PrettifyService } from './app.prettifyService';


@Component({
    selector: 'modals-app',
    templateUrl:'app/modals.component.html',
    styleUrls:['app/themes.css', 'app/common.css'],
    directives:[CORE_DIRECTIVES,MODAL_DIRECTIVES],
    viewProviders:[BS_VIEW_PROVIDERS],
    providers:[PrettifyService]
})
export class ModalsComponent {
   constructor(private prettifyService: PrettifyService){
     this.prettifyService.formatCode();
   }
    @ViewChild('dynamicModal') dynamicModal:any;
    public title="Modals Component";
    public required:boolean=false;
    public dynamicModalContent:string='This is a dynamic modal.';
    public dynamicModalInfoType:string='Info';
    public dialogInfo:any={
      title:'',
      type:'Info',
      content:'This is a dynamic modal.',
      buttons:[]
    };
    public showDialog(){
      this.dialogInfo.title=this.dialogInfo.type + ' Modal';
      this.dialogInfo.buttons=this.dialogInfo.type==='Warning'? ['Continue','Cancel']:['OK'];
      this.dynamicModal.show();

    }
    public dialogBtnClick(btnType:any){
      this.dynamicModal.hide();
    }
}
