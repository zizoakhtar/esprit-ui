import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// @ts-ignore
import { MaterialModule } from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { NewStageComponent } from './board-user/new-stage/new-stage.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CmpltComponent } from './home/cmplt/cmplt.component';
import { FooterComponent } from './home/footer/footer.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UploadComponent } from './board-user/upload/upload.component';
import { ListStageComponent } from './board-moderator/list-stage/list-stage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    NewStageComponent,
    CmpltComponent,
    FooterComponent,
    ForgetPasswordComponent,
    UploadComponent,
    ListStageComponent
  ],
    imports: [
        MatTabsModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule, BrowserAnimationsModule, MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule,
        AppRoutingModule, FormsModule, HttpClientModule, MatButtonModule, MatInputModule,
        ReactiveFormsModule, MatSelectModule, MatRadioModule, MatIconModule, MatDatepickerModule, MatToolbarModule,
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
