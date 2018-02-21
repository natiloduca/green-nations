import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Country } from '../view-models/country';

@Component({
  selector: 'app-countrymaint',
  templateUrl: './countrymaint.component.html',
  styleUrls: ['./countrymaint.component.css']
})
export class CountrymaintComponent {

  countries : Array<Country>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: AppDataService,
  			private router: Router) {
  	dataService.getCountries().subscribe((data) => this.countries = data);
  }

  cancelDelete() {
    this.isDeleting = false;
  }

  createCountry() {
    this.router.navigate(['/authenticated/countrydetail', 0, 'create']);
  }
  
  deleteCountry(id: number) {
  	this.isDeleting = true;
  	this.dataService.deleteCountry(id).subscribe(
  		c => this.cancelDelete(),
  		err => { this.deleteError = err; this.isDeleting = false; }
  	);
  }

  deleteCountryQuestion(id: number) {
  	this.deleteError = null;
  	this.deleteId = id;
  }

  editCountry(id: number) {
  	this.router.navigate(['/authenticated/countrydetail', id, 'edit']);
  }

  showCountryDetail(id: number) {
  	this.router.navigate(['/authenticated/countrydetail', id, 'details']);
  }

}
