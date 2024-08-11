import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SqueezeBoxModule } from 'projects/squeezebox/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SqueezeBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
