import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ToDoService {
constructor(private http: HttpClient){}

getAllItems(){
    return this.http.get('https://localhost:7292/ToDo');
}
}