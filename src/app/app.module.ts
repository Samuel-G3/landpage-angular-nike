import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { MainComponent } from './features/home/components/main/main.component';
import { ItemComponent } from './features/home/components/main/item/item.component';
import { HeroComponent } from './features/home/components/hero/hero.component';
import { GalleryComponent } from './features/home/components/gallery/gallery.component';
import { HeaderComponent } from './features/home/components/header/header.component';
import { ImageComponent } from './shared/components/image/image.component';
import { FooterComponent } from './features/home/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    ItemComponent,
    HeroComponent,
    GalleryComponent,
    HeaderComponent,
    ImageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
