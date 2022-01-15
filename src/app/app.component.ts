import { Component } from '@angular/core';

import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INF2-D';
 // session_name='Formation Web Avancee';
 firstSession ={
   id:1,
   name: 'Formation Web',
   track: "MEAN Stack",
   date: new Date('2021-11-25'),
   local: 'Tunis',
   duree: 3,
   participants: 0
 }

}
