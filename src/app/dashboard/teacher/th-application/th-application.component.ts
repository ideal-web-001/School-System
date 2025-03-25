import { Component } from '@angular/core';

@Component({
  selector: 'app-th-application',
  templateUrl: './th-application.component.html',
  styleUrls: ['./th-application.component.css']
})
export class ThApplicationComponent {
  displayedColumns: string[] = ['app_position', 'app_sender_name', 'app_date', 'status','app_action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  app_position: number;
  app_date:string;
  app_sender_name:string;
  app_action:string;
  status:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12 May 2022', status:'accept', app_action:'none' },
  {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12 May 2022', status:'accept', app_action:'none' },
  {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12 May 2022', status:'accept', app_action:'none' },
  {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12 May 2022', status:'accept', app_action:'none' },
  {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12 May 20222', status:'accept', app_action:'none' },
  
];