import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Item } from '../Models/Item.model'
import { take, tap } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-items-add',
  templateUrl: './items-add.component.html',
  styleUrls: ['./items-add.component.scss']
})
export class ItemsAddComponent {
  itemForm: FormGroup =  new FormGroup({
    ItemName: new FormControl('', Validators.required),
    ItemDescription: new FormControl('', Validators.required),
    ItemStatus: new FormControl(false, Validators.required),
  });
  constructor(
    private toDoService: ToDoService,
    private router: Router) {}
  btnSave_OnClick(){
    console.log('form', this.itemForm);
    if(!this.itemForm.valid){
      return;
    }
    const item: Item = this.itemForm.value;
    this.toDoService.addItem(item).pipe(
      take(1),
      tap((res) => {
        console.log(res);
        if(res){
          this.router.navigate(['/list']);
        }
      })
      ).subscribe();
  }
}
