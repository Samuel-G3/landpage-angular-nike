import { Component, OnInit } from '@angular/core';
import { Footer } from '../../models/home';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footer: Footer;
  constructor() {
    this.footer = {
      img: {
        src: "https://i.ibb.co/cQb4MFM/link.png",
        alt: "linkedin",
      },
      img2: {
        src: "https://i.ibb.co/CHNqQ7D/git.png",
        alt: "github",
      },
      text: "Upgrade HUB student",
      created: "Samuel García",
    }
  }

  ngOnInit(): void {
  }

}