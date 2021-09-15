import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {loginComponent}from './components/login.component';
import HomeModule from './components/Home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,


  ],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
