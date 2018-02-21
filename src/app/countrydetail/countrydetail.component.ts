import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Country } from '../view-models/country';
import { FieldDefinition} from '../../fw/dynamic-forms/field-definition';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})

export class CountrydetailComponent implements OnInit {

  country: Country;
  countryDefinition: Array<FieldDefinition> = [
  	{
  		key: 'id',
  		type: 'number',
  		isId: true,
  		label: 'Id',
  		required: true
  	},
  	{
  	  key: 'name',
  		type: 'string',
  		isId: false,
  		label: 'Country Name',
  		required: true
  	},
  	{
  	  key: 'epiIndex',
  		type: 'number',
  		isId: false,
  		label: 'EPI Index',
  		required: true
  	}	
  ];
  
  errorMessage: string;
  operation: string;

  constructor(private route: ActivatedRoute,
  				private router: Router,
  				private dataService: AppDataService) { }
  
  createCountry(country: Country) {
  	country.id = 0;
  	this.errorMessage = null;
  	this.dataService.createCountry(country).subscribe(
  		c => this.router.navigate(['/authenticated/countrymaint']),
  		err => this.errorMessage = 'Error creating country'
  	);
  }
  
  ngOnInit() {
  	this.operation = this.route.snapshot.params['operation'];
  	
  	if (this.operation === 'create') {
  		this.country = { id:0, name: "", epiIndex: null};
  	}
  	else {
  		this.dataService.getCountry(this.route.snapshot.params['id']).subscribe(
  			(country: Country) => this.country = country
  		);
  	}
  }
  updateCountry(country: Country) {
    this.errorMessage = null;
    this.dataService.updateCountry(country).subscribe(
      c => this.router.navigate(['/authenticated/countrymaint']),
      err => this.errorMessage = 'Error updating country'
    );
  }

}
