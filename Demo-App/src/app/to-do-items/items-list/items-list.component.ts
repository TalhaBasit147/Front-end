import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { ToDoService } from '../to-do.service';
import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ItemsAddComponent } from '../items-add/items-add.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'delete', 'edit'];
  dataSource: any;
  constructor(
    private toDoService: ToDoService,
    private router: Router,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.spinner.show();
    this.toDoService.getAllItems().pipe(
      take(1),
      tap(v => {
        this.dataSource = v;
        this.spinner.hide();
      })
    ).subscribe();
  }

  onClickAdd(){
    this.dialog.open(ItemsAddComponent);
  }
  btnDelete_OnClick(item: any){
    console.log('item', item);
    this.toDoService.deleteItem(item.itemId).pipe(
      take(1),
      tap((res) => {
        console.log(res);
        this.getAllItems();
      })
    ).subscribe();
  }

  btnEdit_OnClick(element: any) {
    this.toDoService.selectedItem = element;
    this.router.navigate(['/list/edit'])
  }

}
