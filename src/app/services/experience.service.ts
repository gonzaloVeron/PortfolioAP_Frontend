import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/Experience';
import { ApiRestService } from './api-rest.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private apiRestService: ApiRestService) { }

  getAll(): Observable<Array<Experience>> {
    return this.apiRestService.get<Array<Experience>>("/experiences");
  }

  getExperience(id: number): Observable<Experience> {
    return this.apiRestService.get<Experience>(`/experiences/${id}`)
  }

  patchExperience(id: number, exp: Experience): Observable<Experience> {
    return this.apiRestService.patch<Experience>(`/experiences/jwt/${id}`, exp);
  }

  deleteExperience(id: number): Observable<Experience> {
    return this.apiRestService.delete<Experience>(`/experiences/jwt/${id}`);
  }

  createExperience(exp: Experience): Observable<Experience> {
    return this.apiRestService.post<Experience>(`/experiences/jwt`, exp);
  }

}
