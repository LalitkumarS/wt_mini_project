import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      bio: [''],
      motherTongue: ['', Validators.required],
      religion: ['', Validators.required],
      caste: ['', Validators.required],
      education: ['', Validators.required]
    });
    
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.http.post('http://localhost:4005/api/create-profile', this.profileForm.value).subscribe(response => {
        console.log(response);
      });
    }
  }
}
