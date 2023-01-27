import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/app.service';
import { Notes } from 'src/app/modules/sticky/sticky/sticky.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  notes: Notes[] = [];
  constructor(private observer: BreakpointObserver, private router: Router,private appService: SharedService) {
    
    this.appService.currentNote.subscribe((note: Notes|null) => {
      if (note) {
        this.notes.push(note);
      }
    });
  }


addNote(note: Notes) {
this.appService.setNote(note);
console.log("Note added.");
}

delete(index: number) {
this.notes.splice(index, 1);
}



}
