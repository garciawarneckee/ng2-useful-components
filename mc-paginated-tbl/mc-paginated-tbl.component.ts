import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mc-paginated-tbl',
  templateUrl: './mc-paginated-tbl.component.html',
  styleUrls: ['./mc-paginated-tbl.component.scss']
})
export class McPaginatedTblComponent {

  @Input()
  fields: Array<Object>;

  @Input()
  content: Array<Object>;

  @Input()
  hasMore: boolean;

  @Input()
  filterType: string;

  @Input()
  pageNumber: number;

  constructor() { }

}
