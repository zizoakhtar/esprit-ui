import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FrgtauthService} from './frgtauth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  forgotPasswordMessage: string;


  constructor(private authService: FrgtauthService , private router: Router) {
  }

  ngOnInit() {
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }


    sendMail() {
      if (this.email.invalid) { return "veuillez verifier votre e-mail"; }
      const email = this.email.value;
      this.authService.forgetPassword(email);
      this.router.navigate(['/frgt']);
    }
  }
