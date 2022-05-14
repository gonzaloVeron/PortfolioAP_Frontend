import { Component,  Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-skill-circle',
  templateUrl: './skill-circle.component.html',
  styleUrls: ['./skill-circle.component.scss']
})
export class SkillCircleComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {

  }


}
