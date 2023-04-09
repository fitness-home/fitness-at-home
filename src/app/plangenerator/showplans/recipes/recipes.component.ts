import { Component, Input, OnInit } from '@angular/core';
import { PlangenServiceService } from '../../plangen-service.service';
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { randomInt } from 'crypto';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],

})
export class RecipesComponent implements OnInit {
  @Input() recipes?: any;
  @Input() timing?: string;

  random?: number;


  constructor(public planService: PlangenServiceService) { }

  ngOnInit(): void {
    // this.planService.getRecipes(this.timing??"low-carb").subscribe((res) => {
    //   this.recipes=res;
    // });
    this.random = Math.floor(Math.random() * 10) + 1;
  }

  remove(text: string) {
    return text.replace("Keto", "");
  }

  customizedesc(text: string){
    return text.replace(".",".\n");
  }

  getButtonClass(tag: string) {
    switch (tag) {
      case '15-minute-meals':
        return 'btn-success';
      case '3-ingredient-meals':
        return 'btn-warning';
      case '5-ingredient-meals':
        return 'btn-danger';
      case 'appetizer':
        return 'btn-primary';
      case 'beef-free':
        return 'btn-secondary';
      case 'beverages':
        return 'btn-info';
      case 'breakfast':
        return 'btn-dark';
      case 'chicken-free':
        return 'btn-secondary';
      case 'dairy-free':
        return 'btn-light';
      case 'desserts':
        return 'btn-danger';
      case 'egg-free':
        return 'btn-light';
      case 'eggs':
        return 'btn-light';
      case 'fish':
        return 'btn-info';
      case 'fish-free':
        return 'btn-secondary';
      case 'freezer-friendly':
        return 'btn-success';
      case 'french':
        return 'btn-primary';
      case 'gluten-free':
        return 'btn-secondary';
      case 'good-for-leftovers':
        return 'btn-success';
      case 'grains':
        return 'btn-primary';
      case 'high-protein':
        return 'btn-danger';
      case 'keto':
        return 'btn-secondary';
      case 'kid-friendly':
        return 'btn-warning';
      case 'lchf':
        return 'btn-secondary';
      case 'low-carb':
        return 'btn-secondary';
      case 'lunch':
        return 'btn-info';
      case 'main-dishes':
        return 'btn-primary';
      case 'meal-plan-ok':
        return 'btn-success';
      case 'msg':
        return 'btn-secondary';
      case 'no-cooking-required':
        return 'btn-success';
      case 'one-pot-meals':
        return 'btn-success';
      case 'paleo':
        return 'btn-danger';
      case 'pantry-recipes':
        return 'btn-success';
      case 'peanut-free':
        return 'btn-secondary';
      case 'peanuts':
        return 'btn-secondary';
      case 'pescatarian':
        return 'btn-info';
      case 'pork-free':
        return 'btn-secondary';
      case 'quick-easy':
        return 'btn-success';
      case 'relevant-meal--beverages':
        return 'btn-info';
      case 'relevant-meal--breakfast':
        return 'btn-dark';
      case 'relevant-meal--desserts':
        return 'btn-danger';
      case 'relevant-meal--lunch':
        return 'btn-info';
      case 'relevant-meal--main-dishes':
        return 'btn-primary';
      case 'relevant-meal--salads':
        return 'btn-success';
      case 'relevant-meal--sides':
        return 'btn-primary';
      case 'relevant-meal--snacks':
        return 'btn-warning';
      case 'salads':
        return 'btn-success';
      case 'sheet-pan-dinners':
        return 'btn-success';
      case 'shellfish':
        return 'btn-info';
      case 'shellfish-free':
        return 'btn-secondary';
      case 'sides':
        return 'btn-primary';
    }
    return 'btn-primary'
  }
}
