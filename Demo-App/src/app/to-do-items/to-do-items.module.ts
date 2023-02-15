import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoItemsRoutingModule } from './to-do-items-routing.module';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsAddComponent } from './items-add/items-add.component';
import { MaterialExampleModule } from '../material.module';
import { ToDoService } from './to-do.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsEditComponent } from './items-edit/items-edit.component'

@NgModule({
  declarations: [
    ItemsContainerComponent,
    ItemsListComponent,
    ItemsAddComponent,
    ItemsEditComponent,
  ],
  imports: [
    ToDoItemsRoutingModule,
    MaterialExampleModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers:[ToDoService]
})
export class ToDoItemsModule { }
