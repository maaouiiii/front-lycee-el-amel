import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit{
  @ViewChild('mobileNavToggle', { static: true }) mobileNavToggle: ElementRef | undefined;
  @ViewChild('navbar', { static: true }) navbar: ElementRef | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.mobileNavToggle.nativeElement.addEventListener('click', (event) => {
      // @ts-ignore
      this.navbar.nativeElement.classList.toggle('navbar-mobile');
      event.target.classList.toggle('bi-list');
      event.target.classList.toggle('bi-x');
    });
  }
  }


