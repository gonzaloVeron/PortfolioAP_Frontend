import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';
import { ApiRestService } from './api-rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private apiRestService: ApiRestService) { }

  getAll(): Observable<Array<Project>> {
    return this.apiRestService.get<Array<Project>>("/projects");
  }

  getProject(id: number): Observable<Project> {
    return this.apiRestService.get<Project>(`/projects/${id}`);
  }

  patchProject(id: number, project: Project): Observable<Project> {
    return this.apiRestService.patch<Project>(`/projects/jwt/${id}`, project);
  }

  deleteProject(id: number): Observable<Project> {
    return this.apiRestService.delete<Project>(`/projects/jwt/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.apiRestService.post<Project>(`/projects/jwt`, project);
  }
}
