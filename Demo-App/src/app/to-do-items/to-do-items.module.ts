import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoItemsRoutingModule } from './to-do-items-routing.module';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsAddComponent } from './items-add/items-add.component';
import { MaterialExampleModule } from '../material.module';
import { ToDoService } from './to-do.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ItemsContainerComponent,
    ItemsListComponent,
    ItemsAddComponent,
  ],
  imports: [
    ToDoItemsRoutingModule,
    MaterialExampleModule,
    HttpClientModule
    ],
  providers:[ToDoService]
})
export class ToDoItemsModule { }
