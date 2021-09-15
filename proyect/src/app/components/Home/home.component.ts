import { Component } from "@angular/core";

@Component({
    selector:'home-component',
    templateUrl:'./home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class homeComponent {
    currentClick:string="";
    seleccion:string = "";
    clickTab(event:any){
      this.currentClick= event;
    }
    
  } 