import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CarTableComponent } from './car-table/car-table.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatTableModule,SearchComponent,CarTableComponent
  ],
  exports: [SearchComponent,CarTableComponent],
})
export class SharedModule { }
