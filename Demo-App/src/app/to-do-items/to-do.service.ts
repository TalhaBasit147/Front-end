import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "./Models/Item.model";

@Injectable()
export class ToDoService {
constructor(private http: HttpClient){}

public selectedItem: any;

getAllItems(){
    return this.http.get('https://localhost:7292/ToDo');
}

addItem(item: Item) {
    return this.http.post('https://localhost:7292/ToDo', item);
}

deleteItem(itemId: string){
    return this.http.delete(`https://localhost:7292/ToDo/${itemId}`)
}

updateItem(itemId: string, item: Item) {
    return this.http.put(`https://localhost:7292/ToDo/${itemId}`, item);
}
}