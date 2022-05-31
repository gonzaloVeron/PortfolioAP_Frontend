import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Education } from 'src/app/models/Education';
import { EducationService } from 'src/app/services/education.service';
import { environment } from 'src/environments/environment';
import { UpdateEducationComponent } from '../update-education/update-education.component';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {

  educations: Array<Education>;

  title: string

  @Input() showButtons: boolean = false;

  constructor(private educationService: EducationService, public dialog: MatDialog) { }

  ngOnInit() {
    this.title = "Educación";
    this.educationService.getAll().subscribe((resp: Array<Education>) => {
      this.educations = resp;
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(UpdateEducationComponent);

    dialogRef.afterClosed().subscribe((edu: Education) => {
      if(edu){
        this.educations.push(edu);
      }
    });
  }

  deleteEducation(event){
    let index = this.educations.indexOf(this.educations.find(elem => elem.id === event));
    this.educations.splice(index, 1);
  }

}
