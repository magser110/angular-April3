import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @HostBinding('class.pressed') isPressed = false;

  toggleState() {
    this.isPressed = !this.isPressed;
  }
}
