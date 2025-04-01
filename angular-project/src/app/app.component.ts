import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { BoxComponent } from './box/box.component';
import { CounterComponent } from './counter/counter.component';
import { MessageComponent } from './message/message.component';
import { ToggleComponent } from './toggle/toggle.component';
import { DynamicMessageComponent } from './dynamic-message/dynamic-message.component';
import { Message2Component } from './message2/message2.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Counter2Component } from './counter2/counter2.component';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimerComponent } from "./timer/timer.component";


@Component({
  selector: 'app-root',
  imports: [AboutComponent, ContactComponent, HomeComponent, ServicesComponent, ProductComponent, HeaderComponent, ButtonComponent, CardComponent, BoxComponent, CounterComponent, MessageComponent, ToggleComponent, DynamicMessageComponent, Message2Component, UserDashboardComponent, Counter2Component, ContentDisplayComponent, DashboardComponent, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
