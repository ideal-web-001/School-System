import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  displayedColumns: string[] = ['Sno','appli_type','std_name','class_name','std_roll','appli_date','appli_status','action'];
  dataSource = new MatTableDataSource();

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
     this.api.get_application().subscribe(
       (res:any)=>{
         // console.log(res.data);
         this.dataSource.data= res.data;
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
