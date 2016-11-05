import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HEROES } from './mock-heroes';


//defined a service
@Injectable()
export class HeroService {
  
  constructor(private http:Http){}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }
   // URL to web api
  private heroesUrl = 'app/heroes';

  //get the selected hero
  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}


}
