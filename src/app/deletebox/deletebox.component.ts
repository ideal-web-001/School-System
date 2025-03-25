import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletebox',
  templateUrl: './deletebox.component.html',
  styleUrls: ['./deletebox.component.css']
})
export class DeleteboxComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matref: MatDialogRef<DeleteboxComponent>

  ) { }

  
  ngOnInit(): void {
    console.log(this.data)
  }

  onNoClick(){
    this.matref.close()
  }
}