import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { ToDoService } from '../to-do.service';
import { Router } from '@angular/router'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
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
    private router: Router) {}

  ngOnInit() {
    this.getAllItems();
  }
  
  getAllItems() {
    this.toDoService.getAllItems().pipe(
      take(1),
      tap(v => {
        console.log('data', v);
        this.dataSource = v;
      })
    ).subscribe();
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
