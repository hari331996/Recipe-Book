import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 5),
    new Ingredient('Maize', 2),
    new Ingredient('Refined flour', 500)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
