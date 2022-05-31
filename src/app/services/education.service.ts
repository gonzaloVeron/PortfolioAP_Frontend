import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/Education';
import { ApiRestService } from './api-rest.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private apiRestService: ApiRestService) { }

  getAll(): Observable<Array<Education>> {
    return this.apiRestService.get<Array<Education>>("/educations");
  }

  getEducation(id: number): Observable<Education> {
    return this.apiRestService.get<Education>(`/educations/${id}`);
  }

  patchEducation(id: number, edu: Education): Observable<Education> {
    return this.apiRestService.patch<Education>(`/educations/jwt/${id}`, edu);
  }

  deleteEducation(id: number): Observable<Education> {
    return this.apiRestService.delete<Education>(`/educations/jwt/${id}`);
  }

  createEducation(edu: Education): Observable<Education> {
    return this.apiRestService.post<Education>(`/educations/jwt`, edu);
  }

}
