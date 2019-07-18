import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';
import { food } from '../food';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  food:food;
  constructor(private route:ActivatedRoute,
    private foodservice:FoodService) { }

  ngOnInit() {
    this.getfoodid();
  }
  getfoodid():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.foodservice.getfoodid(id).subscribe(food=>this.food=food);
    
  }

}
