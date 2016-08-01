let prettify = require('node_modules/google-code-prettify/src/prettify.js');

import { Injectable } from '@angular/core';

@Injectable()
export class PrettifyService{
  formatCode(){
    setTimeout(()=>{
      prettify.prettyPrint();
    }, 200);
  }
}
