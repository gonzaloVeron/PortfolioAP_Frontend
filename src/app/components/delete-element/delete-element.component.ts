import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EducationService } from 'src/app/services/education.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { ProjectService } from 'src/app/services/project.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-delete-element',
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.scss']
})
export class DeleteElementComponent implements OnInit {

  title: string;

  idToFind: number;

  loading: boolean = false;

  constructor(private dialogRef: MatDialogRef<DeleteElementComponent>,
    private experienceService: ExperienceService,
    private educationService: EducationService,
    private skillService: SkillService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    if(localStorage.getItem("exp")){
      this.title = "la experiencia de trabajo";
      this.idToFind = parseInt(localStorage.getItem("exp"));
    }
    if(localStorage.getItem("edu")){
      this.title = "la educación";
      this.idToFind = parseInt(localStorage.getItem("edu"));
    }
    if(localStorage.getItem("skill")){
      this.title = "la habilidad"
      this.idToFind = parseInt(localStorage.getItem("skill"));
    }
    if(localStorage.getItem("pro")){
      this.title = "el proyecto"
      this.idToFind = parseInt(localStorage.getItem("pro"));
    }

  }

  deleteElem(){
    if(localStorage.getItem("exp")){
      this.experienceService.deleteExperience(this.idToFind).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
    if(localStorage.getItem("edu")){
      this.educationService.deleteEducation(this.idToFind).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
    if(localStorage.getItem("skill")){
      this.skillService.deleteSkill(this.idToFind).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
    if(localStorage.getItem("pro")){
      this.projectService.deleteProject(this.idToFind).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  cancel(){
    this.dialogRef.close(false);
  }

}
