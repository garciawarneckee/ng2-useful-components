import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-mc-tbl',
  templateUrl: './mc-tbl.component.html',
  styleUrls: ['./mc-tbl.component.scss']
})
export class McTblComponent {

  @Input()
  fields: Array<Object>;

  @Input()
  content: Array<any>;

  constructor() { }

}
