import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
  private loged=false;
  constructor(private httpClient: HttpClient) { }

  login(user:string, pass:string): Observable<boolean> {
    this.loged = true;
    return this.httpClient.get<any[]>(`http://localhost:3000/users?user=${user}&password=${pass}`)
    .pipe(
      map(data => !!data.length)
    );
  }

  isLoged() {
    return this.loged;
  }

}
