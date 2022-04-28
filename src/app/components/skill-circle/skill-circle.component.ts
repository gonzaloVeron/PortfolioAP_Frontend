import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill-circle',
  templateUrl: './skill-circle.component.html',
  styleUrls: ['./skill-circle.component.scss']
})
export class SkillCircleComponent implements OnInit, AfterViewInit {

  @ViewChild('asd') numberDoc: any;
  circle: any;
  asd;

  value: number = 0;

  @HostBinding('style.--target-width')
  private targetWidth: number = 250;
  //472 - 45
  //45 - 100%
  //??? - 50%
  constructor() { }
  
  ngAfterViewInit(){
    // this.numberDoc = this.numberDoc.nativeElements;   
    // this.circle = document.getElementById("circle");
  }

  ngOnInit() {
    let counter = 0;
    setTimeout(() => {
      this.value = 25;
    }, 5000)
    // const element = document.getElementById("test");
    // setInterval(() => {
    //   if(counter == 65){
    //     clearInterval();
    //   }else{
    //     counter += 1;
    //     this.numberDoc.innerHTML = counter + " %";
    //   }
    // }, 30);
    // element.style.strokeDashoffset = "700";
    // console.log(element.style.strokeDashoffset)

    // let element2 = document.getElementById('test');
    // let elementStyle = window.getComputedStyle(element2);
    // let elementColor = elementStyle.getPropertyValue('strokeDashoffset');

    // console.log(elementStyle)
    // console.log(elementStyle.strokeDashoffset)
    // setTimeout(() => {
    //   console.log(elementStyle.strokeDashoffset)
    // }, 1000)
  }


}
