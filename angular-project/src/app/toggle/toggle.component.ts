import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  isActive: boolean = false;

  toggleState(){
    this.isActive = !this.isActive;
  }
}
