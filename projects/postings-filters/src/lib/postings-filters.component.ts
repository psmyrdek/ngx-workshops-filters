import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-postings-filters',
  templateUrl: './postings-filters.component.html',
  styleUrls: ['./postings-filters.component.css']
})
export class PostingsFiltersComponent {

  @Output()
  filterPublic = new EventEmitter();

  @Output()
  filterReallyOld = new EventEmitter();

  @Output()
  filterFilledJobDescription = new EventEmitter();

  filterByPublic() {
    this.filterPublic.emit();
  }

  filterByReallyOld() {
    this.filterReallyOld.emit();
  }

  filterByJobDescription() {
    this.filterFilledJobDescription.emit();
  }

}
