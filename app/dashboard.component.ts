import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:"dashboard",
    templateUrl:'dashboard.components.html'
})

export class DashboardComponent implements OnInit{

    heroes:Hero[];
    
    constructor(
        private heroservice:HeroService,
        private router:Router
        ){
    }

    ngOnInit():void{
        this.heroservice.getHeroes().then(
            heroes=>this.heroes=heroes.slice(1,5)
        );
    }
    
    gotoDetail(hero:Hero):void{
        let link = ['/detail',hero.id];
        this.router.navigate(link);
    }
}