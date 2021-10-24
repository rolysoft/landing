import { Component, OnInit } from '@angular/core';
import { Pricing } from '../plans/plans.model';
import { pricingData } from './data';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss']
})
export class ModeloComponent implements OnInit {

  pricingData: Pricing[];

  constructor() { }

  ngOnInit(): void {
    // fetches the data
    this._fetchData();
    console.log(pricingData);
    
  }

  /**
   * Pricing data
   */
  private _fetchData() {
    this.pricingData = pricingData;
  }

}
