import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { UserDTO } from 'src/app/models/UserDTO';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<UpdateUserComponent>, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.updateUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      employment: ['', Validators.required]
    });
    this.userService.getUser(environment.user_id).subscribe((resp: User) => {
      this.updateUserForm.setValue({name: resp.name, surname: resp.surname, employment: resp.employment});
    });
  }
  
  controlField(field){
    return this.updateUserForm.get(field).touched && this.updateUserForm.get(field).invalid ? "is-invalid" : (this.updateUserForm.get(field).touched && this.updateUserForm.get(field).valid) ? "is-valid" : "";
  }

  updateUser(){
    this.updateUserForm.markAllAsTouched();
    let user: UserDTO = User.userUpdate(this.updateUserForm.getRawValue().name, this.updateUserForm.getRawValue().surname, this.updateUserForm.getRawValue().employment, environment.user_id);
    if(this.updateUserForm.valid){
      this.userService.updateAvatarData(user).subscribe((resp: User) => {
        this.dialogRef.close(user);
      }, err => {
        console.error(err);
      })
    }
  }

}
