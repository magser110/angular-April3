import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit, OnDestroy {
  counter: number = 0;
  private timer: any;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    console.log('timer cleared');

  }
}
