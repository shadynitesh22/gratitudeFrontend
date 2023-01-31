// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Notes } from './modules/sticky/sticky/sticky.model'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  notes:any=[];
  noteIndex = 0;
  noteAdded :BehaviorSubject<any> =  new BehaviorSubject([]);
  noteDeleted = new Subject<number>();


  note =this.noteAdded.asObservable();

  addNote(note: any) {
    
    this.notes.push(note);
    this.noteAdded.next(this.notes);
    
  
    
  }

  getAddedNotes():BehaviorSubject<any>{
      return this.noteAdded;
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.noteDeleted.next(index);
  }
}