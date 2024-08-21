import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.query.toLowerCase());
  }
}
