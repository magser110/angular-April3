import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  message: string = 'hello, angular';

  changeMessage(){
    this.message = "you clicked the button"
  }
}
