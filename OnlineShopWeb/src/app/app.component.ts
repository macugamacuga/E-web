import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlineShopWeb';
  // myScriptElement:HTMLScriptElement;

  constructor(){
    // this.myScriptElement=document.createElement("script");
    //   this.myScriptElement.src="src/assets/jsScripts/product.js";
    //   document.body.appendChild(this.myScriptElement);
  }
}


