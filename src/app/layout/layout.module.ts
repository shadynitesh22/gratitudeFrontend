import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { StickyModule } from '../modules/sticky/sticky.module';
import { DropdownDirective } from '../shared/dropdown.directive';
import { LayoutComponent } from './layout.component';
import {  SharedService } from '../app.service';



@NgModule({
  declarations: [
    DropdownDirective,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    StickyModule,
  
  ],
  exports : [
    LayoutComponent
  ],
  providers:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {





  
 }
