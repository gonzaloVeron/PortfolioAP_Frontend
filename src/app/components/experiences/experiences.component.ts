import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { environment } from 'src/environments/environment';
import { UpdateExperienceComponent } from '../update-experience/update-experience.component';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences: Array<Experience>;

  @Input() title: string

  constructor(private experienceService: ExperienceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.title = "Experiencias laborales";
    this.experienceService.getAll().subscribe((resp: Array<Experience>) => {
      this.experiences = resp;
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(UpdateExperienceComponent);

    dialogRef.afterClosed().subscribe((exp: Experience) => {
      if(exp){
        console.log(exp);
        this.experiences.push(exp);
      }
    });
  }

  deleteExperience(event){
    let index = this.experiences.indexOf(this.experiences.find(elem => elem.id === event));
    this.experiences.splice(index, 1);
  }

}
