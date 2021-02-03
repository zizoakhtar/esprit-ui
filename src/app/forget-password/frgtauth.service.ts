import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UserRole} from '../Models/UserRole';
import {User} from '../Models/User';
import {Message} from '../Models/Message';

const authURL = 'http://localhost:8080/api/auth';


interface AuthResponse {
  token: string;
  role: UserRole;
}

@Injectable({
  providedIn: 'root'
})
export class FrgtauthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public email: string;


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  authHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
    return httpOptions;
  }

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  forgetPassword(email: string) {
    const user = new User();
    user.username = email;
    return this.httpClient.post<Message>(`${authURL}/forgetPassword`, user, this.httpOptions).subscribe(res => {
      alert('Send');
    }, error => {alert('Error'); });
  }

}
