import { Component, OnInit } from '@angular/core';
import { Main } from '../../models/Home';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public main: Main[];

  constructor() { 
    this.main = [
      {
        title: 'Nike Air VaporMax 2021 FK',
        text: 'Color mostrado: Negro/Blanco/Anthracite/Negro',
        price: '219.99 €',
        sale: '169.99 €',
        img: {
          src: "./assets/img/n1.jpg", alt: 'nike vapormax'
        }
      },
      {
        title: 'Nike Air VaporMax 2021 FK',
        text: 'Color mostrado: Wolf Grey/Blanco/Volt/Negro',
        price: '219.99 €',
        sale: '159.99 €',
        img: {
          src: "./assets/img/n2.jpg", alt: 'nike vapormax'
        }
      },
      {
        title: 'Nike Air VaporMax 2021 FK',
        text: 'Color mostrado: Particle Grey/Aluminum/Light',
        price: '219.99 €',
        sale: '179.99 €',
        img: {
          src: "./assets/img/n3.jpg", alt: 'nike vapormax'
        }
      },
    ];
  }

  ngOnInit(): void {
  }

}