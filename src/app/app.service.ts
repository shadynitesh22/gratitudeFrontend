// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notes } from '../app/modules/sticky/sticky/sticky.model'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private noteSubject = new BehaviorSubject<Notes | null>(null);
  currentNote = this.noteSubject.asObservable();

  setNote(note: Notes) {
    this.noteSubject.next(note);
  }
}
