import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;


  constructor(private observer: BreakpointObserver, private router: Router) { }


  ngAfterViewInit(): void {

    this.observer.observe(['(max-width: 800px)']).subscribe((result) => {
      if (result.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
  }
}
