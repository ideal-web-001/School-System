import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent implements OnInit, AfterViewInit{
      displayedColumns: string[] = ['Sn', 'fee_id','std_name','class_name','std_roll','class_fee','curr_paid','fee_rcv','curr_due','fee_date','action'];
      dataSource = new MatTableDataSource();
      total_count:number = 0;
      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;

    constructor(
      private api:ApiService
    ){}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

    ngOnInit(): void {
      this.api.get_fee().subscribe(
        (res:any)=> {
          // console.log(res.data);
          this.dataSource.data= res.data;
          // this. total_count = res.data.length;
        }
      )
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}