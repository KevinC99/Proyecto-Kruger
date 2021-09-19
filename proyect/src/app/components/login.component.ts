import { Component,  EventEmitter,  Output } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
    selector:'login-component',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class loginComponent {
    @Output() loggingEvent: EventEmitter<boolean> = new EventEmitter();
    password!: string;
    user!: string;

    constructor(private authService: AuthService) {
    }

    ingresar() {
      this.authService.login(this.user, this.password).subscribe(
        (data) => {
          this.loggingEvent.emit(data);
        }
      );
    }
  }
