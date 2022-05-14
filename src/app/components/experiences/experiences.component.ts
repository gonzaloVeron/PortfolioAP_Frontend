import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences: Array<Experience> = [new Experience("", "", "", "", "", "Experience 1"), new Experience("", "", "", "", "", "Experience 1"), new Experience("", "", "", "", "", "Experience 1")]

  @Input() title: string

  constructor() { }

  ngOnInit() {
  }

}
