import { Component, HostBinding, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ShowplansComponent } from './showplans/showplans.component';
import { PlangenServiceService } from './plangen-service.service';


@Component({
  selector: 'app-plangenerator',
  templateUrl: './plangenerator.component.html',
  styleUrls: ['./plangenerator.component.scss',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    // '../../../node_modules/mdb-ui-kit/css/mdb.min.css'
  ],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]

})
export class PlangeneratorComponent implements OnInit {
  @HostBinding('@fadeAnimation') fadeAnimation = true;
  weight?: number;
  goalweight?: number;
  age?: number;
  gender?: string;
  height?: number;
  exerciseCategory?: string;
  showgoalweightFlag: boolean = true;
  showageFlag: boolean = true;
  showgenderFlag: boolean = true;
  showheightFlag: boolean = true;
  showExerciseFlag: boolean = true;

  showForm = 'form';


  showgoalweight(): void {
    this.showgoalweightFlag = true;
  }

  showage(): void {
    this.showageFlag = true;
  }

  showgender(): void {
    this.showgenderFlag = true;
  }

  showheight(): void {
    this.showheightFlag = true;
  }

  // dinner? : any;
  showExercisesFlag(): void {
    this.showExerciseFlag = true;
    
    // this.planService.getRecipes("low-carb,high-protein").subscribe((res) => {
    //   this.dinner=res;
    // });
  }

  constructor(private router: Router, public planService: PlangenServiceService) {
    // this.weight = 0;
    // this.goalweight = 0;
    // this.age = 0;
    // this.gender = "";
    // this.height = 0;
    
  }

  ngOnInit(): void {
    this.fadeAnimation = false;
    let user =localStorage.getItem("user");
    console.log(user);
    this.planService.getUserInfo(user).subscribe((res: any) =>  {
      this.weight = res?.weight;
      this.goalweight = res?.targetWeightGoal;
      this.height = res?.height * 30.48;
      this.age = res?.age;
      this.gender = res?.gender;
    });
  }

  // lunch? : any;
  
  onSubmitClick() {
    console.log(this.weight);
    this.showForm = 'loading';
    // this.planService.getRecipes("lunch",7).subscribe((res) => {
    //   this.lunch=res;
    // });
    setTimeout(() => {
      this.showForm = 'showplans';

    }, 2000)
  }



}
