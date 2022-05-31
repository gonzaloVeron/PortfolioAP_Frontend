import { Component,  Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from 'src/app/models/Skill';
import { DeleteElementComponent } from '../delete-element/delete-element.component';
import { UpdateSkillComponent } from '../update-skill/update-skill.component';

@Component({
  selector: 'app-skill-circle',
  templateUrl: './skill-circle.component.html',
  styleUrls: ['./skill-circle.component.scss']
})
export class SkillCircleComponent implements OnInit {

  @Input() skill: Skill;

  @Output('delete') delete: EventEmitter<number> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog() {
    localStorage.setItem("skill", "" + this.skill.id);
    const dialogRef = this.dialog.open(UpdateSkillComponent);

    dialogRef.afterClosed().subscribe((skill: Skill) => {
      if(skill){
        this.skill.level = skill.level;
        this.skill.name = skill.name;
      }
      localStorage.removeItem("skill");
    });
  }

  openDelete(){
    localStorage.setItem("skill", "" + this.skill.id);
    const dialogRef = this.dialog.open(DeleteElementComponent);

    dialogRef.afterClosed().subscribe((del: boolean) => {
      if(del){
        this.delete.emit(this.skill.id);
      }
      localStorage.removeItem("skill");
    });
  }

}
