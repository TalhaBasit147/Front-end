import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsAddComponent } from './items-add/items-add.component';
import { ItemsListComponent } from './items-list/items-list.component';

const routes: Routes = [{
  path:'',
  component: ItemsListComponent
},
{
  path:'add',
  component: ItemsAddComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoItemsRoutingModule { }
