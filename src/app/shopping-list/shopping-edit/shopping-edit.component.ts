import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) name: ElementRef;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    const item = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.ingredientAdded.emit(item);
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }
}
