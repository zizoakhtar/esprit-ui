import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StageService} from '../../_services/stage.service';
import {Stage} from '../../Models/Stage';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-new-stage',
  templateUrl: './new-stage.component.html',
  styleUrls: ['./new-stage.component.css']
})
export class NewStageComponent implements OnInit {
    constructor(private US: StageService,
      private router: Router, private token: TokenStorageService) {
    }
  stage: Stage = new Stage();
  submitted = false;

  ceci() {
    this.router.navigate(['convention']);
  }
  newStage(): void {
    this.submitted = false;
    this.stage = new Stage();
  }
  save() {
    this.US.ajoutConv(this.stage)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stage = new Stage();
   // this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/universities']);
  }
  currentUser: any;

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

  }
}
