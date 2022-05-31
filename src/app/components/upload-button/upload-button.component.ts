import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.scss']
})
export class UploadButtonComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addDoc(event){
    let file = event.target.files[0];
    const formdata = new FormData();
    formdata.append('image', file);
    // this.buttonLoading = true;
    // let name = this.form.getRawValue().file_name;
    // if("isiGonza" != ''){
      this.userService.savePhoto(formdata)
     .subscribe(
        (resp: any) => {    
          // this.buttonLoading = false;
          // this.documentsData.data.push(resp.data);
          // this.form.reset();
          // file = null;
          // this.show = false;
        },
        (err) => {
          console.error(err);
          // this.toastService.error("Error", "No se pudieron guardar los cambios");
          // this.buttonLoading = false;
        }
      );
    // }
  }

}
