import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-libr-application',
  templateUrl: './libr-application.component.html',
  styleUrls: ['./libr-application.component.css']
})
export class LibrApplicationComponent implements OnInit {
  displayedColumns: string[] = ['appli_position', 'appli_type','sender_type', 'appli_action'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
private api:ApiService

  ){}

ngOnInit():void{
  this.api.get_librnapplication().subscribe((res:any)=>{
    this.dataSource.data = res.data
     }
   )
 }


 ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}


// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }
// // export interface PeriodicElement {
//   app_position: number;
//   app_date:string;
//   app_sender_name:string;
//   app_action:string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
 
//   {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
//   {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
//   {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
//   {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
//   {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
// ]

