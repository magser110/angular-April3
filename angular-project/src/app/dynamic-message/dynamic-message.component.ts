import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-message',
  imports: [],
  templateUrl: './dynamic-message.component.html',
  styleUrl: './dynamic-message.component.css'
})
export class DynamicMessageComponent {
  count: number = 0;
  message: string = 'start counting';

  increment(){
    this.count++;
    this.updateMessage();
  }

  decrement(){
    this.count--;
    this.updateMessage();
  }

  updateMessage(){
    if(this.count > 0){
      this.message = 'count is positive'
    }
    else if(this.count < 0){
      this.message = 'count is negative'
    }
    else {
      this.message = 'start counting'
    }
  }
}
