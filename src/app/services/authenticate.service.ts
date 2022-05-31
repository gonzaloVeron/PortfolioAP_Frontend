import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from '../models/Credentials';
import { UserLogged } from '../models/UserLogged';
import { ApiRestService } from './api-rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient, private apiRestService: ApiRestService) { }

  authenticate(credentials: Credentials): Observable<UserLogged>{
    return this.apiRestService.post<UserLogged>("/users/login", credentials);
  }

  keep(user: UserLogged){
    localStorage.setItem("token", JSON.stringify(user.token));
  }

}
