import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from 'src/app/models/Skill';
import { SkillService } from 'src/app/services/skill.service';
import { UpdateSkillComponent } from '../update-skill/update-skill.component';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.scss']
})
export class HardAndSoftSkillsComponent implements OnInit {

  skills: Array<Skill>;

  @Input() showButtons: boolean = false;

  constructor(private skillService: SkillService, private dialog: MatDialog) { }

  ngOnInit() {
    this.skillService.getAll().subscribe((resp: Array<Skill>) => {
      this.skills = resp;
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(UpdateSkillComponent);

    dialogRef.afterClosed().subscribe((skill: Skill) => {
      if(skill){
        this.skills.push(skill);
      }
    });
  }

  deleteSkill(event){
    let index = this.skills.indexOf(this.skills.find(elem => elem.id === event));
    this.skills.splice(index, 1);
  }

}
