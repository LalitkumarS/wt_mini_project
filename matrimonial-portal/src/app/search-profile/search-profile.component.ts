import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {
  searchForm: FormGroup;
  profiles: any[] = [];
  castes = ['Upper Caste', 'Lower Caste', 'Other']; // Add more castes as needed

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.searchForm = this.fb.group({
      caste: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSearch(): void {
    const selectedCaste = this.searchForm.get('caste')?.value;
    this.http.get<any[]>(`http://localhost:4006/api/search-profile?caste=${selectedCaste}`).subscribe(response => {
      this.profiles = response;
    });
  }
}
