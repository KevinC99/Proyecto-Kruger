import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged: boolean = false;
  constructor(private auth: AuthService) {

  }

  login(user: string, password: string) {
    this.auth.login(user, password);
    this.logged = this.auth.isLoged();
  }

  handlerLogin(logged: any) {
    console.log(logged);
    this.logged = logged;
  }

}

