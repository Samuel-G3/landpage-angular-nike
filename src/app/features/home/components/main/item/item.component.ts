import { Component, Input, OnInit } from '@angular/core';
import { Main } from '../../../models/home';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() public item!: Main;
  constructor() { }

  ngOnInit(): void {
  }

}