import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path:'',
  // component: AppComponent
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
