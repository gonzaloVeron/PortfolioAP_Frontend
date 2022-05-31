import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  imgPath: string = environment.fireImgPath;

  user: User;
  
  @Input() showButtons: boolean = false;

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(environment.user_id).subscribe((resp: User) => {
      this.user = resp;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(UpdateUserComponent);

    dialogRef.afterClosed().subscribe((user: User) => {
      if(user){
        this.user.name = user.name;
        this.user.surname = user.surname;
        this.user.employment = user.employment;
      }
    });
  }

  setImage(event){
    console.log("AAA >", event)
    this.user.profile_img = event.imgName;
  }

}
