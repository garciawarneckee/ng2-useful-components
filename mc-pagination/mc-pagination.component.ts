import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mc-pagination',
  templateUrl: './mc-pagination.component.html',
  styleUrls: ['./mc-pagination.component.scss']
})
export class McPaginationComponent implements OnInit {

  @Input()
  hasMore: boolean;

  @Input()
  filterType: string;

  offset: number;
  maxPerPage: number;


  constructor() {}

  ngOnInit() {
    this.maxPerPage = 10;
  }

  previousPage() {
    this.offset = this.offset - this.maxPerPage;
  }

  nextPage() {
    this.offset = this.offset + this.maxPerPage;
  }


}
