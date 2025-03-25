import { Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-libr-book-transaction',
  templateUrl: './libr-book-transaction.component.html',
  styleUrls: ['./libr-book-transaction.component.css']
})
export class LibrBookTransactionComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['tran_position', 'tran_id', 'book_id', 'reciever_type','reciever_id','issue_date','return_date', 'tran_action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  total_count: any;
  constructor(private api : ApiService){}
    ngOnInit():void{
      this.api.get_book_tran().subscribe(
        (res:any)=>{
          // console.log(res.data);
          this.dataSource.data = res.data;
          this.total_count = res.data.length;
          
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

// export interface PeriodicElement {
//   lib_name: string;
//   lib_position: number;
//   lib_id: number;
//   lib_salary:number;
//   lib_joindate: string;
//   lib_action:string;
//   lib_email:string;
//   lib_address:string;
//   lib_mobile:number;
//   lib_adhar:number;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {lib_position: 1, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
//   {lib_position: 2, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
//   {lib_position: 3, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
//   {lib_position: 4, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
//   {lib_position: 5, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
  
// ];