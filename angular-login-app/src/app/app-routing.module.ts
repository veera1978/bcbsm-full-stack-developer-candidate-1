import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DocumentationFormComponent } from './documentation-form/documentation-form.component';
import { SignupComponent } from './signup/signup.component';
import { DocumentsComponent } from './documentations/documentations.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component:SignupComponent},
  { path: 'login', component: LoginComponent },
  { path: 'documentation-form', component: DocumentationFormComponent },
  {path: 'documentations', component: DocumentsComponent}
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
