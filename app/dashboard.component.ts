import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    moduleId:module.id,
    selector:"dashboard",
    templateUrl:'dashboard.components.html'
})

export class DashboardComponent implements OnInit{

    heroes:Hero[];
    
    constructor(private heroservice:HeroService){
    }

    ngOnInit():void{
        this.heroservice.getHeroes().then(
            heroes=>this.heroes=heroes.slice(1,5)
        );
    }
    
    gotoDetail():void{}
}