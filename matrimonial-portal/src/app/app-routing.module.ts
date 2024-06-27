import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profiles', component: ProfileListComponent },
  { path: 'profile/:id', component: ProfileDetailComponent },
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'search-profile', component: SearchProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
