import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/app.service';
import {Notes} from '../sticky/sticky/sticky.model';

@Component({
  selector: 'app-addsticky',
  templateUrl: "./addsticky.component.html",
  styleUrls: ['./addsticky.component.css']
})
export class AddstickyComponent {
notes : Notes[] = [] ;
// note : Subscription = new Subscription;
noteIndex= 0;

constructor(private  stickyService: SharedService){
}


ngDoCheck(){

 this.stickyService.noteAdded.subscribe((resp:any)=>{
    console.log(resp, "subsrription respoinse");
    console.log(this.stickyService.noteAdded, "noteadded");
   })
  
}
addNote(note:any){
  console.log(note, "notess");
  
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