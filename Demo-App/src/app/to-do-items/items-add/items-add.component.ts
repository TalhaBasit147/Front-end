import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Subscription, take, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { Item } from '../Models/Item.model';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-items-add',
  templateUrl: './items-add.component.html',
  styleUrls: ['./items-add.component.scss'],
})
export class ItemsAddComponent implements OnDestroy {
  itemForm: FormGroup = new FormGroup({
    ItemName: new FormControl('', Validators.required),
    ItemDescription: new FormControl('', Validators.required),
    ItemStatus: new FormControl(false, Validators.required),
    Date: new FormControl(new Date()),
  });
  subscriptions$: Subscription;

  constructor(
    private toDoService: ToDoService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.subscriptions$ = new Subscription();
  }

  btnSave_OnClick() {
    console.log('form', this.itemForm);
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    if (!this.itemForm.valid) {
      return;
    }
    const item: Item = this.itemForm.value;
    this.subscriptions$.add(this.subscriptions$.add(
      this.toDoService
        .addItem(item)
        .pipe(
          take(1),
          tap((res) => {
            if (res) {
              this.router.navigate(['/list']);
            }
          })
        )
        .subscribe())
    );
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
