import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.scss']
})
export class HardAndSoftSkillsComponent implements OnInit {

  skills: Array<Skill> = [new Skill(17, "Skill 1"), new Skill(39, "Skill 2"), new Skill(81, "Skill 3"), new Skill(56, "Skill 4"), new Skill(33, "Skill 5"), new Skill(5, "Skill 6")]

  constructor() { }

  ngOnInit() {
  }

}
