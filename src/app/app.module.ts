import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostingsFiltersModule } from 'projects/postings-filters/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostingsFiltersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
