import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-content-display',
  imports: [],
  templateUrl: './content-display.component.html',
  styleUrl: './content-display.component.css'
})
export class ContentDisplayComponent implements AfterContentInit{
  ngAfterContentInit(){
    console.log('content has been projected into the component');

  }
}
