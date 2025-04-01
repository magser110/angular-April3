import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements
AfterViewInit{
  title: string = 'dashboard';

  ngAfterViewInit(){
    console.log('view has been initialized', this.title);

  }
}
