import { Component, Input, OnInit } from '@angular/core';
import { ImageNameDTO } from 'src/app/models/ImageNameDTO';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-background-img',
  templateUrl: './background-img.component.html',
  styleUrls: ['./background-img.component.scss']
})
export class BackgroundImgComponent implements OnInit {

  imgPath: string = environment.fireImgPath;

  backgroundImg: string = 'no-images.png';

  @Input() showButtons: boolean = false;

  loading: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(environment.user_id).subscribe((resp: User) => {
      this.backgroundImg = resp.background_img;
    })
  }

  addDoc(event){
    this.loading = true;
    let file = event.target.files[0];
    const formdata = new FormData();
    formdata.append('image', file);
    this.userService.saveBackgroundPhoto(formdata).subscribe((resp: ImageNameDTO) => {
        this.backgroundImg = resp.imgName;
        this.loading = true;
      }
    );
  }
  
}
