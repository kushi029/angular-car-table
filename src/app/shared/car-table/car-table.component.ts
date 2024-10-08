import { CommonModule } from '@angular/common';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SearchComponent } from '../search/search.component';
import { Car } from './car.model'; // Import Car interface from car.model.ts

@Component({
  selector: 'app-car-table',
  standalone: true,
  imports: [CommonModule,MatTableModule, SearchComponent],
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css'],
})
export class CarTableComponent implements OnInit, OnChanges {
  searchText: string = ''; // Bind this with the search component

  displayedColumns: string[] = ['id', 'make', 'model', 'year', 'color', 'price'];

  allCars: Car[] = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, color: 'Red', price: 20000 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019, color: 'Blue', price: 22000 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021, color: 'Black', price: 35000 },
    { id: 4, make: 'Chevrolet', model: 'Impala', year: 2018, color: 'White', price: 24000 },
    { id: 5, make: 'Nissan', model: 'Altima', year: 2020, color: 'Gray', price: 21000 },
    { id: 6, make: 'BMW', model: '3 Series', year: 2022, color: 'Blue', price: 41000 },
    { id: 7, make: 'Audi', model: 'A4', year: 2021, color: 'Red', price: 39000 },
    { id: 8, make: 'Mercedes', model: 'C-Class', year: 2019, color: 'Silver', price: 43000 },
    { id: 9, make: 'Tesla', model: 'Model 3', year: 2022, color: 'White', price: 55000 },
    { id: 10, make: 'Hyundai', model: 'Elantra', year: 2021, color: 'Black', price: 20000 },
    { id: 11, make: 'Kia', model: 'Optima', year: 2020, color: 'Gray', price: 19000 },
    { id: 12, make: 'Volkswagen', model: 'Passat', year: 2018, color: 'Blue', price: 23000 },
    { id: 13, make: 'Mazda', model: 'Mazda3', year: 2019, color: 'Red', price: 21000 },
    { id: 14, make: 'Subaru', model: 'Impreza', year: 2022, color: 'Silver', price: 25000 },
    { id: 15, make: 'Dodge', model: 'Charger', year: 2021, color: 'White', price: 32000 },
    { id: 16, make: 'Chrysler', model: '300', year: 2020, color: 'Black', price: 30000 },
    { id: 17, make: 'Lexus', model: 'ES', year: 2022, color: 'Blue', price: 45000 },
    { id: 18, make: 'Jaguar', model: 'XE', year: 2021, color: 'Gray', price: 48000 },
    { id: 19, make: 'Acura', model: 'TLX', year: 2019, color: 'Red', price: 36000 },
    { id: 20, make: 'Infiniti', model: 'Q50', year: 2020, color: 'Silver', price: 37000 },
  ];

  filteredCars: Car[] = [];
  noResults: boolean = false;

  ngOnInit(): void {
    this.filteredCars = [...this.allCars]; // Initialize filteredCars with allCars
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchText']) {
      this.filterCars(changes['searchText'].currentValue);
    }
  }

  onSearch(searchQuery: string): void {
    this.filterCars(searchQuery);
  }

  filterCars(searchQuery: string): void {
    if (!searchQuery) {
      this.filteredCars = [...this.allCars];
      this.noResults = false; 
      return;
    }

    this.filteredCars = this.allCars.filter(car =>
      Object.values(car).some(val => {
        // Check if val is a string and convert to lowercase
        if (typeof val === 'string') {
          return val.toLowerCase().includes(searchQuery.toLowerCase());
        }
        // Check if val is a number and convert to string for comparison
        if (typeof val === 'number') {
          return val.toString().includes(searchQuery);
        }
        return false;
      })
    );
    this.noResults = this.filteredCars.length === 0;
  }
}