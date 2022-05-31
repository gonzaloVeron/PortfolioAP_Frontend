import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experience } from 'src/app/models/Experience';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { UpdateProjectComponent } from '../update-project/update-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Array<Project>;
  title: string

  @Input() showButtons: boolean = false;
  
  constructor(private projectService: ProjectService, public dialog: MatDialog) { }

  ngOnInit() {
    this.title = "Proyectos";
    this.projectService.getAll().subscribe((resp: Array<Project>) => {
      this.projects = resp;
    })
    // "Jingoist-Symphony"
  }

  openDialog(){
    const dialogRef = this.dialog.open(UpdateProjectComponent);

    dialogRef.afterClosed().subscribe((proj: Project) => {
      if(proj){
        this.projects.push(proj);
      }
    });
  }

  deleteProject(event){
    let index = this.projects.indexOf(this.projects.find(elem => elem.id === event));
    this.projects.splice(index, 1);
  }
}
