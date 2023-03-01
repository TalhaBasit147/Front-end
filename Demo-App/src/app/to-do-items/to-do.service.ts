import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "./Models/Item.model";
import { environment } from "../../environment/environment"

@Injectable()
export class ToDoService {
constructor(private http: HttpClient){}

public selectedItem: any;

getAllItems(){
    return this.http.get(environment.ApiUrl);
}

addItem(item: Item) {
    return this.http.post(environment.ApiUrl, item);
}

deleteItem(itemId: string){
    return this.http.delete(`${environment.ApiUrl}/${itemId}`)
}

updateItem(itemId: string, item: Item) {
    return this.http.put(`${environment.ApiUrl}/${itemId}`, item);
}
}