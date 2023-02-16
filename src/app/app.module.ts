import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { StickyModule } from './modules/sticky/sticky.module';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { SharedService } from './app.service';

const routes: Routes = [
  {
    path : '',
    component : LayoutComponent,
    loadChildren :() => import('./modules/addsticky/addsticky.module').then(m => m.AddstickyModule)
  },

]


@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
