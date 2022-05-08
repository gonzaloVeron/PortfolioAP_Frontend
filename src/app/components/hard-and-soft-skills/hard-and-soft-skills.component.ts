import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.scss']
})
export class HardAndSoftSkillsComponent implements OnInit {

  skills: any = [1, 2, 3, 4, 5, 6]

  constructor() { }

  ngOnInit() {
  }

}
