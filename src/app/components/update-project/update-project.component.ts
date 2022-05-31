import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  updateProjectForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<UpdateProjectComponent>, private formBuilder: FormBuilder, private projectService: ProjectService) { }

  ngOnInit() {
    this.updateProjectForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required]
    });
    if(localStorage.getItem("pro")){
      let idToFind = parseInt(localStorage.getItem("pro"));
      this.projectService.getProject(idToFind).subscribe((resp: Project) => {
        this.updateProjectForm.setValue({
          title: resp.title,
          description: resp.description,
          url: resp.url
        });
      });
    }
  }
  
  controlField(field){
    return this.updateProjectForm.get(field).touched && this.updateProjectForm.get(field).invalid ? "is-invalid" : (this.updateProjectForm.get(field).touched && this.updateProjectForm.get(field).valid) ? "is-valid" : "";
  }

  updateProject(){
    let project_id = (localStorage.getItem("pro")) ? parseInt(localStorage.getItem("pro")) : -1;
    this.updateProjectForm.markAllAsTouched();
    let project: Project = new Project(this.updateProjectForm.getRawValue().description,
      project_id,
      this.updateProjectForm.getRawValue().title,
      this.updateProjectForm.getRawValue().url, 
    );
    if(localStorage.getItem("pro")){
      if(this.updateProjectForm.valid){
        this.projectService.patchProject(project_id, project).subscribe((resp: Project) => {
          this.dialogRef.close(resp);
        }, err => {
          console.error(err);
        })
      }
    }else{
      if(this.updateProjectForm.valid){
        this.projectService.createProject(project).subscribe((resp: Project) => {
          this.dialogRef.close(resp);
        }, err => {
          console.error(err);
        })
      }
    }
  }

}
