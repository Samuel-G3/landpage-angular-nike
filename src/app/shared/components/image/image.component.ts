import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Image} from '../../models/Shared';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() public image!: Image;
  
  constructor() { }

  ngOnInit(): void {
  }

}