import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';
import { DeleteboxComponent } from 'src/app/deletebox/deletebox.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['Sn','notice_id' ,'notice_type','notice_date', 'action'];
  dataSource = new MatTableDataSource();
  deletevalue: any = 1;
      total_count:number = 0;
      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;

    constructor(
      private api:ApiService,
      private url : ActivatedRoute,
      private router:Router,
      private dialog: MatDialog
      
    ){}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

    ngOnInit(): void {
      this.api.get_notice().subscribe(
        (res:any)=> {
          // console.log(res.data);
          this.dataSource.data= res.data;
          this. total_count = res.data.length;
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
onDelete(nid:any){
 const dialogRef = this.dialog.open(DeleteboxComponent, {
      data: this.deletevalue,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (this.deletevalue == result) {
        this.api.delete_notice(nid).subscribe(
          (res:any)=>{
            alert(res.message);
            window.location.reload();
            // this.router.navigate(["/admin/notification"]);
          }
          )
      }
      else {
       }
    });

 

}
}
