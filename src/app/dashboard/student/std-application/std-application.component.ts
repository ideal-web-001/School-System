import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-std-application',
  templateUrl: './std-application.component.html',
  styleUrls: ['./std-application.component.css']
})
export class StdApplicationComponent {
  displayedColumns: string[] = ['position', 'std_name', 'class_name', 'std_roll', 'appli_type', 'appli_date', 'appli_status','action'];
  dataSource = new MatTableDataSource();
  login_details:any
  uid:any
  id:any
  aplid:any
  constructor(private api : ApiService){}
    ngOnInit():void{
      this.login_details=localStorage.getItem('token')
      console.log(this.uid=JSON.parse(this.login_details))
      this.id=this.uid.type_id
      
      this.api.get_single_std_application(this.id).subscribe(
        (res:any)=>{
          this.aplid=res.data[0].appli_id;
          console.log(res.data)
          this.dataSource.data = res.data;
          // this.total_count = res.data.length;
          
        }
      )
     
   }
}
