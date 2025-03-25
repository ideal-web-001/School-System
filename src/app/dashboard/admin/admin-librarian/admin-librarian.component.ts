import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';
import { DeleteboxComponent } from 'src/app/deletebox/deletebox.component';

@Component({
  selector: 'app-admin-librarian',
  templateUrl: './admin-librarian.component.html',
  styleUrls: ['./admin-librarian.component.css']
})
export class AdminLibrarianComponent implements OnInit {
  displayedColumns: string[] = ['s.no', 'librn_id', 'librn_name', 'librn_jndate','librn_salary','librn_mob','librn_img', 'action'];
  dataSource = new MatTableDataSource;

  $img_local_url ='http://localhost/upload/';
  $img_url = this.$img_local_url +'logo.png';
     
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  deletevalue: any = 1;
  // total_count: any;

  constructor(
    private api:ApiService,
    private dialog: MatDialog
    ){}

  ngOnInit():void{
    this.api.get_librarian().subscribe(
      (res:any)=>{
        console.log(res)
        this.dataSource.data = res.data;
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
  deleteLibrarian(librn_id:any){
    const dialogRef = this.dialog.open(DeleteboxComponent, {
      data: this.deletevalue,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.deletevalue == result) {
    this.api. delete_librarian(librn_id).subscribe(
      (res: any) => {
        // console.log(res)
        alert('Data delete successfully')
      }
    )
  }
  else {
   }
});
};
}
