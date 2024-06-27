import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Ensure correct imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CreateProfileComponent,
    ProfileListComponent,
    ProfileDetailComponent,
    SearchProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
        { path: '', component: ProfileListComponent },
        { path: 'profile/:id', component: ProfileDetailComponent },
        { path: 'create-profile', component: CreateProfileComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        
      ]),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
