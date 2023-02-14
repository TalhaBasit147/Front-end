import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  redirectTo:'list',
  pathMatch: 'full'
},
{
  path: 'list',
  loadChildren: () => import('./to-do-items/to-do-items.module').then(m => m.ToDoItemsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
