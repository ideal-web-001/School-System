import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.classList.add('show');
      }
    });
  }

  ngOnInit(): void {
    this.onWindowScroll(); // to show elements on load if already in view
  }
}
