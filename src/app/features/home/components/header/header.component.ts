import { Component, OnInit } from '@angular/core';
import { Header } from '../../models/Home';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public header: Header;
  constructor() {
    this.header = {
      img: {
        src: "./assets/img/logo.png",
        alt: "Logo de Nike",
      },
      name: "NIKE",
      created: "Zapatillas - Hombre",
    }
  }

  ngOnInit(): void {
  }

}