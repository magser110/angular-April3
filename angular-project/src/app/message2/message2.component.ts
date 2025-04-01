import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-message2',
  imports: [],
  templateUrl: './message2.component.html',
  styleUrl: './message2.component.css'
})
export class Message2Component {
  @Input() message:string = 'does this work';

  ngOnChanges(){
    console.log('message changed: ' , this.message);

  }
}
