
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { SharedService } from '../app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;


  constructor(public stickyService: SharedService) { }

  ngAfterViewInit(): void {
    // this.stickyService.noteAdded.subscribe(notes => {
    //   console.log(notes);
    // });

    // this.stickyService.noteDeleted.subscribe((index: any) => {
    //   console.log(index);
    // });
  }


  addNote(note: any) {
    this.stickyService.addNote(note);
    console.log(note)
  }

  delete(index: any) {
    this.stickyService.deleteNote(index);
  }
}

