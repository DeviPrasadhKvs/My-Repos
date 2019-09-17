import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditArtistDbComponent } from './components/edit-artist-db/edit-artist-db.component';
import { ViewArtistDbComponent } from './components/view-artist-db/view-artist-db.component';
import { UploadArtistDbComponent } from './components/upload-artist-db/upload-artist-db.component';
import { ArtistDbListComponent } from './components/artist-db-list/artist-db-list.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EditArtistDbComponent,
    ViewArtistDbComponent,
    UploadArtistDbComponent,
    ArtistDbListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
