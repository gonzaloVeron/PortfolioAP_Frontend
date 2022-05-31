import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';
import { ApiRestService } from './api-rest.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private apiRestService: ApiRestService) { }

  getAll(): Observable<Array<Skill>> {
    return this.apiRestService.get<Array<Skill>>("/skills");
  }

  getSkill(id: number): Observable<Skill> {
    return this.apiRestService.get<Skill>(`/skills/${id}`);
  }

  patchSkill(id: number, skill: Skill): Observable<Skill> {
    return this.apiRestService.patch<Skill>(`/skills/jwt/${id}`, skill);
  }

  deleteSkill(id: number): Observable<Skill> {
    return this.apiRestService.delete<Skill>(`/skills/jwt/${id}`);
  }

  createSkill(skill: Skill): Observable<Skill> {
    return this.apiRestService.post<Skill>(`/skills/jwt`, skill);
  }

}
