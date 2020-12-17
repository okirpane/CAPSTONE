import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatDialogModule } from '@angular/material/dialog';
import { OTPComponent } from './otp/otp.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OtpChangeComponent } from './otp-change/otp-change.component';
import { ChangeFormComponent } from './change-form/change-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    OTPComponent,
    ChangePasswordComponent,
    OtpChangeComponent,
    ChangeFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OTPComponent]
})
export class AppModule { }
