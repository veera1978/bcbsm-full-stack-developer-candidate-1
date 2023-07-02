import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DocumentationFormComponent } from './documentation-form/documentation-form.component';
import { DocumentsComponent } from './documentations/documentations.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },{ path: 'login', component: LoginComponent },
  {path: 'documentation-form', component: DocumentationFormComponent}, {path: 'documentations', component: DocumentsComponent,  canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DocumentationFormComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
