import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Output() clickEvent: EventEmitter <any>= new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  changeTab(event:any){
    this.clickEvent.emit(event)
  }
}