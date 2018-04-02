import { Component, OnInit, Input } from '@angular/core';
import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newCity : City;

  cities : City[];

  constructor() {
    this.newCity = new City();
    this.cities = [];
  }

  save() {
    let city = new City(this.newCity.name, this.newCity.state);
    this.cities.push(city);
    this.cities.sort(this.sortCitiesByState);

    this.newCity = new City();
  }
  
  sortCitiesByState(cityA: City, cityB: City) {
    if (cityA.state.toLowerCase() == cityB.state.toLowerCase()) {
      return 0;
    }
  
    if (cityA.state.toLowerCase() < cityB.state.toLowerCase()) {
      return -1;
    }
    
    return 1;
  }

}
