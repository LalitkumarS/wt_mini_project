import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.css'
})
export class ProfileListComponent {
  profiles: any[] = []; // Define profiles property as an array of any type

  constructor() {
    // Initialize profiles if needed
    this.profiles = [
      { id: 1, name: 'John Doe', age: 28 },
      { id: 2, name: 'Jane Doe', age: 25 }
    ];
  }
}
