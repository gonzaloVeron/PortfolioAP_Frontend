import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experience } from 'src/app/models/Experience';
import { environment } from 'src/environments/environment';
import { DeleteElementComponent } from '../../delete-element/delete-element.component';
import { UpdateExperienceComponent } from '../../update-experience/update-experience.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  imgPath: string = environment.fireImgPath;

  mediaToken: string = environment.mediaToken;
  
  @Input() experience: Experience;

  @Output('delete') delete: EventEmitter<number> = new EventEmitter();

  @Input() showButtons: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    localStorage.setItem("exp", "" + this.experience.id);
    const dialogRef = this.dialog.open(UpdateExperienceComponent);

    dialogRef.afterClosed().subscribe((exp: Experience) => {
      if(exp){
        this.experience.city = exp.city;
        this.experience.company_name = exp.company_name;
        this.experience.description = exp.description;
        this.experience.end_date = exp.end_date;
        this.experience.image = exp.image;
        this.experience.start_date = exp.start_date;
        this.experience.title = exp.title;
      }
      localStorage.removeItem("exp");
    });
  }

  openDelete(){
    localStorage.setItem("exp", "" + this.experience.id);
    const dialogRef = this.dialog.open(DeleteElementComponent);

    dialogRef.afterClosed().subscribe((del: boolean) => {
      if(del){
        this.delete.emit(this.experience.id);
      }
      localStorage.removeItem("exp");
    });
  }

}
