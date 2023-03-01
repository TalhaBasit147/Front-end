import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from "ngx-spinner";
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogModule} from '@angular/cdk/dialog';

import { ItemsAddComponent } from './items-add/items-add.component';
import { ItemsEditComponent } from './items-edit/items-edit.component'
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsContainerComponent } from './items-container/items-container.component';

import { ToDoService } from './to-do.service';

import { ToDoItemsRoutingModule } from './to-do-items-routing.module';

@NgModule({
  declarations: [
    ItemsContainerComponent,
    ItemsListComponent,
    ItemsAddComponent,
    ItemsEditComponent,
  ],
  imports: [
    ToDoItemsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    NgxSpinnerModule,
    MatDialogModule,
    DialogModule
    ],
  providers:[ToDoService]
})
export class ToDoItemsModule { }
