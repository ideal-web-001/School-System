import {  AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/api.service';
import { DeleteboxComponent } from 'src/app/deletebox/deletebox.component';


@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})

export class AdminTeacherComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['s.no', 't_id', 't_name', 'sub_name', 't_jndate', 't_salary','t_mob','t_img','action'];
  dataSource = new MatTableDataSource();
  $img_local_url ='http://localhost/upload/';
  $img_url = this.$img_local_url +'logo.png';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  deletevalue: any =1;
  constructor(
    private api :ApiService,
    private dialog: MatDialog
  ){}
 
  ngOnInit(): void {
    this.api.get_teacher().subscribe(
      (res:any)=>{
        // console.log(res);
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
  deleteTeacher(t_id: any){
    const dialogRef = this.dialog.open(DeleteboxComponent, {
      data: this.deletevalue,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.deletevalue == result) {
        this.api.deleteTeacher(t_id).subscribe(
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


