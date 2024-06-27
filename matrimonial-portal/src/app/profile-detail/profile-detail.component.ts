import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Profile {
  id: number;
  name: string;
  age: number;
  bio: string;
}

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css'
})
export class ProfileDetailComponent implements OnInit {
  profile: Profile | null = null; // Declare profile property

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const profileId = +this.route.snapshot.paramMap.get('id')!;
    if (profileId) { // Check if profileId is not null or undefined
      // Fetch the profile details using the profileId (example code)
      this.profile = { id: profileId, name: 'John Doe', age: 30, bio: 'Lorem ipsum dolor sit amet.' };
    } else {
      console.error("Profile ID is null or undefined.");
    }
  }
}
 