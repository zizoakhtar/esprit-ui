import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content = '';

  constructor( public router:Router ,private userService: UserService) { }

  ceci(){
    this.router.navigate(['convention']);

  }
  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
