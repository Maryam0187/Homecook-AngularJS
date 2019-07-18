import { Injectable } from '@angular/core';
import {food} from './food';
import {FOODS} from './foodlist';
import  {Observable,of} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }
  getfood():Observable<food[]>
  {
    return of(FOODS);
  
  }

  getfoodid(id:number):Observable<food>
  {
    return of(FOODS.find(food=>food.id===id));
  }

}
