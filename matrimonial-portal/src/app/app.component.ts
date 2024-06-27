import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profiles: any[] = [];
  title ="matrimonial-portal";

  onProfileCreated(profile: any) {
    this.profiles.push(profile); // Add the newly created profile to the list
  }
}
