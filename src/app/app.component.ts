import { Component } from '@angular/core';
import { IsotopeOptions } from 'ngx-isotope';
import { Character } from './character-card/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes: Character[] = [];
  villains: Character[] = [];

  public myOptions: IsotopeOptions = {
    itemSelector: '.grid-item'
  };

  constructor() {
    this.heroes = [
      new Character('Superman', 'assets/hero1.jpg'),
      new Character('Batman', 'assets/hero2.jpg'),
      new Character('Spider-Man', 'assets/hero3.jpg'),
      new Character('Wolverine', 'assets/hero4.jpg')
    ];

    this.villains = [];
  }

}
