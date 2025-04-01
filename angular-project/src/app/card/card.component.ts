import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @HostListener('click') onClick() {
    console.log('card clicked');

  }
}
