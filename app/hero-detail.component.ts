import { Component,OnInit,Input } from '@angular/core';
import {Hero} from "./hero";
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from './hero.service';

@Component({
  moduleId:module.id,
  selector: 'my-hero-detail',
  templateUrl:"hero-detail.component.html",
  styleUrls: [ 'hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit{
    //与[hero]="selectedHero"通过数据绑定传值
    @Input()
    hero: Hero;
    

    constructor(
      private heroService:HeroService,
      private route:ActivatedRoute,
      private location:Location
    ){}

    ngOnInit():void{
      this.route.params.forEach( (params:Params)=>{
               let id = +params['id'];
               this.heroService.getHero(id).then(hero=>this.hero=hero);
            }
        );
    }

    goBack():void{
      this.location.back();
    }
}
