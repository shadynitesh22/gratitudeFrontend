// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Notes } from '../app/modules/sticky/sticky/sticky.model'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  notes:any=[];
  noteIndex = 0;

  noteAdded =  new BehaviorSubject([]);
  noteDeleted = new Subject<number>();

  


  addNote(note: any) {
    this.notes.push(note);
    
    this.noteAdded.next(this.notes)

    console.log(    this.noteAdded,"asdfasdfasdfasdf");
    
    console.log(this.notes, "notes array");
    
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.noteDeleted.next(index);
  }
}