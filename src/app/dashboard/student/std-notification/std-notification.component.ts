import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-std-notification',
  templateUrl: './std-notification.component.html',
  styleUrls: ['./std-notification.component.css']
})
export class StdNotificationComponent implements OnInit{
  displayedColumns: string[] = ['sno', 'notice_type', 'notice_date','action'];
  dataSource = new MatTableDataSource;
  constructor(private api : ApiService){}
  ngOnInit():void{
    this.api.get_notice().subscribe(
      (res:any)=>{
        console.log(res.data);
        this.dataSource.data = res.data;
        // this.total_count = res.data.length;
        
      }
    )
  }

}



