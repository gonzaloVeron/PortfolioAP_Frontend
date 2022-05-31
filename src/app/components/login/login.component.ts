import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Credentials } from 'src/app/models/Credentials';
import { UserLogged } from 'src/app/models/UserLogged';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loading: boolean = false;

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private formBuilder: FormBuilder, private authService: AuthenticateService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }
  
  controlField(field){
    return this.loginForm.get(field).touched && this.loginForm.get(field).invalid ? "is-invalid" : (this.loginForm.get(field).touched && this.loginForm.get(field).valid) ? "is-valid" : "";
  }

  login(){
    this.loginForm.markAllAsTouched();
    let creds: Credentials = new Credentials(this.loginForm.getRawValue().email, this.loginForm.getRawValue().password);
    if(this.loginForm.valid){
      this.loading = true;
      this.authService.authenticate(creds).subscribe((resp: UserLogged) => {
        this.authService.keep(resp);
        this.dialogRef.close(resp.user);
        this.loading = false;
      })
    }
  }
  
}
