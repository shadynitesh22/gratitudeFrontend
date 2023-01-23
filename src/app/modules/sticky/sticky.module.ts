import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyComponent } from './sticky/sticky.component';

import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';


 

@NgModule({
  declarations: [
    StickyComponent,

  ],
  imports: [
    
    CommonModule,
    MaterialModule,
    FormsModule

  ],schemas:[

    NO_ERRORS_SCHEMA




  ],
  
  exports:[StickyComponent],

  // bootstrap: [StickyComponent],
})
export class StickyModule { }
