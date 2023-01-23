import { Component, Output, EventEmitter } from '@angular/core';
import {Notes} from '../sticky/sticky/sticky.model';

@Component({
  selector: 'app-addsticky',
  templateUrl: "./addsticky.component.html",
  styleUrls: ['./addsticky.component.css']
})
export class AddstickyComponent {
notes : Notes[] = []

noteIndex= 0;
addNote(note:any){
  this.notes.push(note);
}

Delete(index:any){
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
