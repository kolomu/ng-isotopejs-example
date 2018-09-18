import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IsotopeModule } from 'ngx-isotope';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IsotopeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
