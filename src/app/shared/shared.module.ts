import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CarTableComponent } from './car-table/car-table.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule,SearchComponent,CarTableComponent
  ],
  exports: [SearchComponent,CarTableComponent],
})
export class SharedModule { }
