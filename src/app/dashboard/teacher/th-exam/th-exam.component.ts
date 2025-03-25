import { Component } from '@angular/core';
interface classs {
  value: string;
  viewValue: string;
}
interface subject {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-th-exam',
  templateUrl: './th-exam.component.html',
  styleUrls: ['./th-exam.component.css']
})
export class ThExamComponent {
  classes: classs[] = [
    {value: 'play-0', viewValue: 'Play'},
    {value: 'Nurs-1', viewValue: 'Nurs'},
    {value: 'stdI-2', viewValue: 'stdI'},
    {value: 'stdII-3', viewValue: 'stdII'},
    {value: 'stdIII-4', viewValue: 'stdIII'},
    {value: 'stdIV-4', viewValue: 'stdIV'},
  ];
  subjects: subject[] = [
    {value: 'Math-0', viewValue: 'Math'},
    {value: 'Hindi-1', viewValue: 'Hindi'},
    {value: 'English-2', viewValue: 'English'},
    {value: 'EVS-3', viewValue: 'EVS'},
    {value: 'GK-4', viewValue: 'GK'},
    {value: 'Computer-5', viewValue: 'Computer'},
  ];
  
}

