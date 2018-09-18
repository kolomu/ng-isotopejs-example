import { Component, OnInit, Input } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character;
  isToggled = false;

  constructor() { }
  ngOnInit() { }

  toggleInfo() {
    setTimeout( () => {
      this.isToggled = !this.isToggled;
    }, 500);
  }
}
