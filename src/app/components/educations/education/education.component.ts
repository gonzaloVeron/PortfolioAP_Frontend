import { isFormattedError } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Education } from 'src/app/models/Education';
import { environment } from 'src/environments/environment';
import { DeleteElementComponent } from '../../delete-element/delete-element.component';
import { UpdateEducationComponent } from '../../update-education/update-education.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  imgPath: string = environment.fireImgPath;

  mediaToken: string = environment.mediaToken;

  @Output('delete') delete: EventEmitter<number> = new EventEmitter();

  @Input() education: Education;

  @Input() showButtons: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    localStorage.setItem("edu", "" + this.education.id);
    const dialogRef = this.dialog.open(UpdateEducationComponent);

    dialogRef.afterClosed().subscribe((edu: Education) => {
      if(edu){
        this.education.average = edu.average;
        this.education.career = edu.career;
        this.education.end_year = edu.end_year;
        this.education.image = edu.image;
        this.education.image = edu.image;
        this.education.institution = edu.institution;
        this.education.start_year = edu.start_year;
        this.education.title = edu.title;
      }
      localStorage.removeItem("edu");
    });
  }

  openDelete() {
    localStorage.setItem("edu", "" + this.education.id);
    const dialogRef = this.dialog.open(DeleteElementComponent);

    dialogRef.afterClosed().subscribe((del: boolean) => {
      if(del){
        this.delete.emit(this.education.id);
      }
      localStorage.removeItem("edu");
    });
  }

}
