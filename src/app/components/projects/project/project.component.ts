import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/models/Project';
import { DeleteElementComponent } from '../../delete-element/delete-element.component';
import { UpdateProjectComponent } from '../../update-project/update-project.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  
  @Input() project: Project;

  @Output('delete') delete: EventEmitter<number> = new EventEmitter();

  @Input() showButtons: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    localStorage.setItem("pro", "" + this.project.id);
    const dialogRef = this.dialog.open(UpdateProjectComponent);

    dialogRef.afterClosed().subscribe((pro: Project) => {
      if(pro){
        this.project.title = pro.title;
        this.project.description = pro.description;
        this.project.url = pro.url;
      }
      localStorage.removeItem("pro");
    });
  }

  openDelete(){
    localStorage.setItem("pro", "" + this.project.id);
    const dialogRef = this.dialog.open(DeleteElementComponent);

    dialogRef.afterClosed().subscribe((del: boolean) => {
      if(del){
        this.delete.emit(this.project.id);
      }
      localStorage.removeItem("pro");
    });
  }

}
