import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['S No', 'staff_id', 'staff_name','staff_fname','staff_mob','staff_salary','staff_type','staff_action'];
  dataSource = new MatTableDataSource();
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  total_count:number = 0;
  constructor( 
    private api:ApiService
  ){}
  
  ngOnInit(): void {
    this.api.get_staff().subscribe(
      (res:any)=> {
        this.dataSource.data= res.data;
        this. total_count = res.data.length;
      }
    )
}
  ngAfterViewInit(): void {
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
