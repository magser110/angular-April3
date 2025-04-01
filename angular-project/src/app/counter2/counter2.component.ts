import { Component } from '@angular/core';

@Component({
  selector: 'app-counter2',
  imports: [],
  templateUrl: './counter2.component.html',
  styleUrl: './counter2.component.css'
})
export class Counter2Component {
  count:number = 0;
  ngDoCheck(){
    console.log('ngDoCheck called- count: ', this.count);

  }
}
