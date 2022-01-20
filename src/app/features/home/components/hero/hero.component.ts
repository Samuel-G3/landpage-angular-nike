import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/features/home/models/home';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public hero: Hero;

  constructor() {
    this.hero = {
      img: {
        src: "./assets/img/centerImage.jpg",
        alt: 'center image'
      },
      description: "Las Nike Air VaporMax 2021 FK son amplias y fáciles de poner, ya que cuentan con tejido Flyknit reciclado y superelástico, además de una zona del tobillo suave que moldea el tobillo.Las costuras del logotipo Swoosh y el clip de TPU reciclado del talón añaden el toque perfecto mientras recorres las calles con una amortiguación VaporMax increíblemente suave.",
    }
  }

  ngOnInit(): void {
  }

}