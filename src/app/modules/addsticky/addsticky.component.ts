import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/app.service';
import {Notes} from '../sticky/sticky/sticky.model';

@Component({
selector: 'app-addsticky',
templateUrl: "./addsticky.component.html",
styleUrls: ['./addsticky.component.css']
})
export class AddstickyComponent implements OnInit {
notes: Notes[] = []

constructor(private appService:SharedService){ }

ngOnInit(): void {
this.appService.currentNote.subscribe(value =>{
if(value){
this.notes.push(value);
console.log(value);
}
});
}

noteIndex= 0;

addNote(note:any){
this.notes.push(note);
}

delete(index: number) {
this.notes.splice(index,1);
}

onDeleteNote(index:number){
  this.notes.splice(index,1);
}
onAddNote(noteData:{title:string,description:string}){
  // this.notes.push({
  //     title:noteData.title,
  //     description :noteData.description
  // });

  console.log(noteData.title,noteData.description);
}

}
