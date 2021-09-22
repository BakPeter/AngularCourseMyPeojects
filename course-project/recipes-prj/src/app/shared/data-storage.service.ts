import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  fetchRecipes() {
    // console.log('data-storage.service fatch data');
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<{
          requestSuccess: true;
          errors: null;
          recipes: Recipe[];
        }>('api/getallrecipes', {
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf8',
            'Access-Control-Allow-Origin': '*',
          }),
        });
      }),
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
