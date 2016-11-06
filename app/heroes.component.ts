import { Component,OnInit } from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})


export class HeroesComponent implements OnInit{
    
    heroes:Hero[];
    selectedHero:Hero;

    //service construction,create and declare vairable
    constructor(
      private heroService: HeroService,
      private router:Router
      ) {}
    
    //use angular lifecycle OnInit to gain data to aviod constructor do too much work
    ngOnInit() : void{
      this.getHeroes();
    }

    getHeroes():void{
      //promise then method
      this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
    }

    onSelect(seHero:Hero):void{
      this.selectedHero = seHero;
    }

    gotoDetail():void{
      this.router.navigate(['/detail',this.selectedHero.id]);
    }
    
    //add a hero
    add(name:string):void{
      name = name.trim();
      if(!name) return ;
      this.heroService.create(name)
          .then(hero=>{
            this.heroes.push(hero);
            this.selectedHero = null;
          });
    }

    //delete a specified hero
    delete(hero:Hero):void{
      this.heroService.delete(hero.id)
          .then(()=>{
            this.heroes = this.heroes.filter(h=>h!==hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
          });
    }
 }

 

 
