import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  fetchRecipes() {
    // console.log('data-storage.service fatch data');
    this.http
      .get<{ requestSuccess: true; errors: null; recipes: Recipe[] }>(
        'api/getallrecipes',
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf8',
            'Access-Control-Allow-Origin': '*',
          }),
        }
      )
      .pipe(
        map((responseData) => {
          return responseData.recipes.map((recipe) => {
            return {
              ...recipe,
              ingredeints: recipe.ingredeints ? recipe.ingredeints : [],
            };
          });
        }),
        tap((recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        })
      )
      .subscribe(
        (response) => {
          // console.log(response.recipes);
          this.recipeService.setRecipes(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'api/setrecipes',
        { recipes: recipes },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf8',
            'Access-Control-Allow-Origin': '*',
          }),
        }
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
