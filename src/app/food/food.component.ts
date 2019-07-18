import { Component, OnInit } from '@angular/core';
import { food } from '../food';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foods:food[];
  constructor(private foodservice:FoodService) { }

  ngOnInit() {
    this.getfood();
  }

  getfood():void {
    this.foodservice.getfood().subscribe(food=>this.foods=food);
  }
}
