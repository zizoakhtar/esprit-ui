import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {NewStageComponent} from './board-user/new-stage/new-stage.component';
import {FooterComponent} from './home/footer/footer.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {UploadComponent} from './board-user/upload/upload.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'convention', component: NewStageComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'frgt', component: ForgetPasswordComponent },
  { path: 'upload', component: UploadComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
