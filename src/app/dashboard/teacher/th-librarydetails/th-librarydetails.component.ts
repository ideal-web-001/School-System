import { Component } from '@angular/core';

@Component({
  selector: 'app-th-librarydetails',
  templateUrl: './th-librarydetails.component.html',
  styleUrls: ['./th-librarydetails.component.css']
})
export class ThLibrarydetailsComponent {
  // displayedColumns: string[] = ['position', 'sdate', 'samount', 'spaid','sdues'];
  displayedColumns: string[] = ['position', 'b_id', 'b_name','issue_date','return_date','lib_action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {

position: number;
b_id:number;
b_name:string;
issue_date: string;
return_date:string;
lib_action:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
{position:1,b_id:1001, b_name:"biology", issue_date:"2-03-23", return_date:"18-03-2023", lib_action:'none'},
{position:1,b_id:1002, b_name:"Math", issue_date:"2-03-23",  return_date:"18-03-2023",lib_action:'none'},
{position:1,b_id:1003, b_name:"English", issue_date:"2-03-23", return_date:"18-03-2023",lib_action:'none'},
];