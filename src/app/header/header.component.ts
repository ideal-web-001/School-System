import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menu2(){
    window.scroll(0,580)
  }
  menu3(){
    window.scroll(0,1040);
  }
  menu4(){
    window.scroll(0,1990)
  }
}
