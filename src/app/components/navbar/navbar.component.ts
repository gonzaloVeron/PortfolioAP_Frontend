import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  apLogo: string = environment.fireImgPath + '52736aa8-db61-4f1f-808d-512a4e7d9220';

  constructor(public dialog: MatDialog, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((user) => {
      // this.login.emit(user)
    });
  }

}
