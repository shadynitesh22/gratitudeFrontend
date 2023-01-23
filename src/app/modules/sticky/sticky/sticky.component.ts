import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Notes} from './sticky.model'




@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css']
})
export class StickyComponent implements OnInit {

  @Output() noteAdded = new EventEmitter<{title:string,description:string}>();
  @Input() note:Notes[];

  @Input() index:number;
  title = '';
  description = '';
   @Output() removeNote =new EventEmitter();
   @Output() addnote =new EventEmitter();

   constructor() {
    this.note = [];
    this.index = 0;
    
    }

  ngOnInit() {
  }

   onRemoveNote(){
    this.removeNote.emit(this.index);
  }

  addNote(){
    this.addnote.emit(this.index);
  }

  onAddNote(){
    this.noteAdded.emit({title : this.title,description:this.description});
  }

  
  dragEnd(event: any) {
    this.note[this.index].top = event.clientX;
    this.note[this.index].left = event.clientY;
}

  set(e:any)
  {
    console.log(e);
  }

}
