import { CommonModule } from '@angular/common';
import {NgModule,} from '@angular/core';
import{FormsModule}from '@angular/forms';
import { SideBarComponent } from 'src/app/side-bar/side-bar.component';
import { buscarComponent } from '../Buscar/buscar.component';
import { homeComponent } from './home.component';
@NgModule({
    declarations: [
      SideBarComponent,
      homeComponent,
      buscarComponent
    ],
    imports: [
      FormsModule,
      CommonModule


    ],
    providers: [],
    exports:[
      homeComponent
    ],
    bootstrap: []
  })
  export default class HomeModule { }
  