import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe = new Recipe(
  //   'A test recipe 2',
  //   'This is a simple test 2',
  //   'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
  // );

  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
}
