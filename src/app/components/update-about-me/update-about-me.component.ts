import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { UserDTO } from 'src/app/models/UserDTO';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-about-me',
  templateUrl: './update-about-me.component.html',
  styleUrls: ['./update-about-me.component.scss']
})
export class UpdateAboutMeComponent implements OnInit {

  updateAboutMeForm: FormGroup;

  loading: boolean = false;

  constructor(private dialogRef: MatDialogRef<UpdateAboutMeComponent>, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.updateAboutMeForm = this.formBuilder.group({
      description: ['', Validators.required]
    });
    this.userService.getUser(environment.user_id).subscribe((resp: User) => {
      this.updateAboutMeForm.setValue({ description: resp.about_me });
    });
  }
  
  controlField(field){
    return this.updateAboutMeForm.get(field).touched && this.updateAboutMeForm.get(field).invalid ? "is-invalid" : (this.updateAboutMeForm.get(field).touched && this.updateAboutMeForm.get(field).valid) ? "is-valid" : "";
  }

  updateUser(){
    this.updateAboutMeForm.markAllAsTouched();
    let user: UserDTO = User.aboutMeUpdate(this.updateAboutMeForm.getRawValue().description, environment.user_id);
    if(this.updateAboutMeForm.valid){
      this.loading = true;
      this.userService.updateAvatarData(user).subscribe((resp: User) => {
        this.dialogRef.close(resp);
        this.loading = false;
      });
    }
  }

}
