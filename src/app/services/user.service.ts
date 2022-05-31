import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { UserDTO } from '../models/UserDTO';
import { UserLogged } from '../models/UserLogged';
import { ApiRestService } from './api-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiRestService: ApiRestService) { }

  getUser(id: number){
    return this.apiRestService.get(`/users/${id}`);
  }

  saveProfilePhoto(obj: FormData){
    return this.apiRestService.upload("/users/jwt/img/profile", obj);
  }

  saveBackgroundPhoto(obj: FormData){
    return this.apiRestService.upload("/users/jwt/img/background", obj);
  }

  updateAvatarData(obj: UserDTO){
    return this.apiRestService.patch<User>("/users/jwt", obj);
  }

  fromUserData(parameters: Array<string>){
    let userLogged: User = JSON.parse(localStorage.getItem("currentUser")).user;
    let attr: any = {};
    for(let param of parameters){
      attr[param] = userLogged[param];
    }
    let user: User = new User(attr.about_me, attr.background_img, attr.birth_date, attr.educations, attr.email, attr.employment, attr.experiences,
      attr.id, attr.name, attr.nationality, attr.profile_img, attr.projects, attr.skills, attr.surname);
    return user;
  }

}
