import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  aboutMeContent: string = "Etiam dignissim diam quis enim lobortis scelerisque fermentum. Et sollicitudin ac orci phasellus. Turpis egestas sed tempus urna et pharetra pharetra. Sem nulla pharetra diam sit amet nisl suscipit. Placerat in egestas erat imperdiet sed euismod nisi. Adipiscing at in tellus integer. Elit scelerisque mauris pellentesque pulvinar. Morbi tristique senectus et netus. Et tortor at risus viverra. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Tortor consequat id porta nibh venenatis cras sed felis eget.";

  constructor() { }

  ngOnInit() {
  }

  test(e){
    console.log("aa");
  }

}
