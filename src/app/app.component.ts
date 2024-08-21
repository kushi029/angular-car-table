import { Component } from '@angular/core';
import { CarTableComponent } from './shared/car-table/car-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
