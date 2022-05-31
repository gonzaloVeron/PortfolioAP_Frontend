import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageNameDTO } from 'src/app/models/ImageNameDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.scss']
})
export class UploadButtonComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Output() onSetImage: EventEmitter<{imgName: string}> = new EventEmitter();

  loading: boolean = false;

  ngOnInit() {
  }

  addDoc(event){
    this.loading = true;
    let file = event.target.files[0];
    const formdata = new FormData();
    formdata.append('image', file);
    this.userService.saveProfilePhoto(formdata).subscribe((resp: ImageNameDTO) => {
        this.onSetImage.emit(resp);
        this.loading = false;
      }
    );
  }

}
