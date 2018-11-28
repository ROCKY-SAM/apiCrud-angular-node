import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskGetComponent } from './task-get/task-get.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskAddComponent } from './task-add/task-add.component';
const routes: Routes = [
  {
    path: 'task/add',
    component: TaskAddComponent
  },
  {
    path: 'task/edit/:id',
    component: TaskEditComponent
  },
  {
    path: 'task',
    component: TaskGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
