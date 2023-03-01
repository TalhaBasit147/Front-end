import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap, take, Subscription } from 'rxjs';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.scss']
})
export class ItemsEditComponent implements OnDestroy{
  itemForm: FormGroup;
  subscriptions$: Subscription;
constructor(
  private toDoService: ToDoService,
  private router: Router,
  private spinner: NgxSpinnerService
  ){
    this.subscriptions$ = new Subscription();
  this.itemForm =  new FormGroup({
    ItemName: new FormControl(this.toDoService.selectedItem.itemName, Validators.required),
    ItemDescription: new FormControl(this.toDoService.selectedItem.itemDescription, Validators.required),
    ItemStatus: new FormControl(this.toDoService.selectedItem.itemStatus, Validators.required),
  });
}
btnUpdate_OnClick() {
  this.spinner.show();
  this.subscriptions$.add(this.toDoService.updateItem(this.toDoService.selectedItem.itemId,  this.itemForm.value).
  pipe(
    take(1),
    tap(()=>{
      this.spinner.hide();
      this.router.navigate(['/list']);
    })
    ).subscribe());
  }
  
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
