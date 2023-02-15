import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { tap, take } from 'rxjs';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.scss']
})
export class ItemsEditComponent {
  itemForm: FormGroup;
constructor(
  private toDoService: ToDoService,
  private router: Router){
  console.log(this.toDoService.selectedItem)
  this.itemForm =  new FormGroup({
    ItemName: new FormControl(this.toDoService.selectedItem.itemName, Validators.required),
    ItemDescription: new FormControl(this.toDoService.selectedItem.itemDescription, Validators.required),
    ItemStatus: new FormControl(this.toDoService.selectedItem.itemStatus, Validators.required),
  });
}
btnUpdate_OnClick() {
  this.toDoService.updateItem(this.toDoService.selectedItem.itemId,  this.itemForm.value).
  pipe(
    take(1),
    tap((Response)=>{
      console.log('done', Response);
      this.router.navigate(['/list']);
    })
  ).subscribe();
}
}
