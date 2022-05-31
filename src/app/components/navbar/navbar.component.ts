import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  apLogo: string = environment.fireImgPath + 'apLogo.png';

  logged: boolean = false;

  @Output("showButtons") showButtons: EventEmitter<boolean> = new EventEmitter(); 

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.logged = true;
      this.showButtons.emit(true);
    }
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((user: User) => {
      if(user){
        this.logged = true;
        this.showButtons.emit(true);
      }
    });
  }

  openLogout(){
    const dialogRef = this.dialog.open(LogoutComponent);

    dialogRef.afterClosed().subscribe((logout: boolean) => {
      if(logout){
        this.logged = false;
        localStorage.clear();
        this.showButtons.emit(false);
      }
    });
  }

}
