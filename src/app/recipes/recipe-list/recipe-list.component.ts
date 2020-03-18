import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('Lasagne', 'A very tasty mexican dish made with tortillas and vegetables. It consist of while and red sauces.', '../../../assets/Lasagne.jpg'),
    new Recipe('Pizza', 'A savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.', '../../../assets/pizza.jpg'),
    new Recipe('Pasta', 'A type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.', '../../../assets/pasta.jpg'),
    new Recipe('Noodles', 'A type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.', '../../../assets/manchurian.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
