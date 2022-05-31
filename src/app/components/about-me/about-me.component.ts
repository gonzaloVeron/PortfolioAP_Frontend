import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { UpdateAboutMeComponent } from '../update-about-me/update-about-me.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  title: string;

  content: string;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.title = "Acerca de"
    this.userService.getUser(environment.user_id).subscribe((resp: User) => {
      this.content = resp.about_me;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(UpdateAboutMeComponent);

    dialogRef.afterClosed().subscribe((user: User) => {
      if(user){
        this.content = user.about_me;
      }
    });
  }

}
