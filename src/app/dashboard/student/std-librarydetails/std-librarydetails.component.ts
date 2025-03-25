import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-std-librarydetails',
  templateUrl: './std-librarydetails.component.html',
  styleUrls: ['./std-librarydetails.component.css']
})
export class StdLibrarydetailsComponent {
  displayedColumns: string[] = ['sno','std_name', 'class_name', 'std_roll', 'book_name', 'issue_date', 'return_date','std_mob'];
  dataSource = new MatTableDataSource();
  login_details:any;
  uid: any;
  id: any;
  constructor(private api : ApiService){}
  ngOnInit():void{
    // this.api. get_book_tran().subscribe(
    //   (res:any)=>{
    //     console.log(res.data);
    //     this.dataSource.data = res.data;
    //     // this.total_count = res.data.length;
        
    //   }
    // )
    this.login_details=localStorage.getItem('token')
      console.log(this.uid=JSON.parse(this.login_details))
      this.id=this.uid.type_id
      console.log(this.id)
      this.api.get_single_tran(this.id).subscribe(
        (res:any)=>{
          console.log(res.data);
          this.dataSource.data = res.data;
          // this.total_count = res.data.length;
          
        }
      )
  }

}





