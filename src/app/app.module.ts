import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IsotopeModule } from 'ngx-isotope';

import { AppComponent } from './app.component';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    IsotopeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
