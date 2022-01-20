import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/features/home/models/home';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public gallery: Gallery;
  constructor() {
    this.gallery = {
      title: "NOVEDADES 2022",
      imageGallery: [
        {
          src: "./assets/img/s1.jpg",
          alt: "Foto de novedad"
        },
        {
          src: "./assets/img/s2.jpg",
          alt: "Foto de novedad"
        },
        {
          src: "./assets/img/s3.jpg",
          alt: "Foto de novedad"
        },
        {
          src: "./assets/img/s4.jpg",
          alt: "Foto de novedad"
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}