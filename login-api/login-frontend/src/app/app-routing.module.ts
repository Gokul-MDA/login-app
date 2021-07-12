import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CreateProfileComponent } from './create-profile/create-profile.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: UpdateProfileComponent },
  { path: 'details', component: ProfileDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
