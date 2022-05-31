import { Injectable } from '@angular/core';
import { ApiRestService } from './api-rest.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private apiRestService: ApiRestService) { }

  savePhoto(obj: FormData){
    return this.apiRestService.upload("/images/jwt/img", obj);
  }

}
