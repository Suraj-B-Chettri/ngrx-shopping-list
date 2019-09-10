import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { ShoppingItem } from './store/models/shopping-item.models';
import { ShoppingAction } from './store/actions/shopping.actions';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private Shopping_url = "http://localhost:3000/shopping/";

  constructor(private http: HttpClient) { }

  getShoppingItem(){
    return this.http.get<Array<ShoppingItem>>(this.Shopping_url)
    .pipe(
      delay(500)
    )
  }

  addShoppingItem(shoppingItem: ShoppingItem){
    return  this.http.post(this.Shopping_url,shoppingItem)
        .pipe(delay(500))
  }

  removeShoppingItem(id:string){
    return this.http.delete(`${this.Shopping_url}/${id}`).pipe(
      delay(500)
    )
  }
}
