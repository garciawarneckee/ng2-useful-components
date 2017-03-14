import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../../domain/campaign';

@Component({
  selector: '[app-mc-row]',
  templateUrl: './mc-row.component.html',
  styleUrls: ['./mc-row.component.scss']
})
export class McRowComponent implements OnInit {

  @Input()
  fields: Array<Object>;

  @Input()
  item: any;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToDetail() {
    this.router.navigate([this.router.url, this.item['id']]);
  }

}
