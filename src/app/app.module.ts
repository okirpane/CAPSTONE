import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { OTPComponent } from './otp/otp.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OtpChangeComponent } from './otp-change/otp-change.component';
import { ChangeFormComponent } from './change-form/change-form.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AddMoneyComponent } from './add-money/add-money.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { BankPageComponent } from './bank-page/bank-page.component'
import { MatInputModule } from '@angular/material/input';
import { BankPageTwoComponent } from './bank-page-two/bank-page-two.component';
import { LogoutComponent } from './logout/logout.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { TransferBankComponent } from './transfer-bank/transfer-bank.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TransferUserComponent } from './transfer-user/transfer-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    OTPComponent,
    ChangePasswordComponent,
    OtpChangeComponent,
    ChangeFormComponent,
    HomeComponent,
    AddMoneyComponent,
    BankPageComponent,
    BankPageTwoComponent,
    LogoutComponent,
    SessionExpiredComponent,
    TransferBankComponent,
    TransferUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatGridListModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'home', component: HomeComponent },
      { path: 'forgot', component: ForgotPasswordComponent },
      { path: 'change', component: ChangePasswordComponent },
      { path: 'changeForm', component: ChangeFormComponent },
      { path: 'bank', component: BankPageComponent },
      { path: 'bankTwo', component: BankPageTwoComponent },
      { path: 'logout', component: LogoutComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OTPComponent]
})
export class AppModule { }
