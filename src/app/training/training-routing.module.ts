import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './components/one/one.component';

const routes: Routes = [
  {
    path: 'one',
    component: OneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
