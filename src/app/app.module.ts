import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { CarouselComponent } from "./content/carousel/carousel.component";
import { CatalogComponent } from "./content/catalog/catalog.component";
import { GaleryComponent } from "./content/galery/galery.component";

// Firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { SentencesComponent } from "./content/sentences/sentences.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Material
import { MatCarouselModule } from "@ngmodule/material-carousel";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CarouselComponent,
    CatalogComponent,
    GaleryComponent,
    SentencesComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule,
    BrowserAnimationsModule, // Only required for storage features
    MatCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
