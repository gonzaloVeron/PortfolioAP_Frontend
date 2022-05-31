import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LogoutComponent>) { }

  ngOnInit() {
  }

  logout(){
    this.dialogRef.close(true);
  }
}