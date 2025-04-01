import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  @HostBinding('class.active') isActive = false;
  @HostListener('click') onClick(){
    this.isActive = !this.isActive;
  }
}
