import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : SampleComponent
  }
]


@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SampleModule { }
