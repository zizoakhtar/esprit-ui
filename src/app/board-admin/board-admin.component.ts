import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';

  constructor( public router: Router, private userService: UserService) { }
ceci(){
   this.router.navigate(['user']);

}
  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
