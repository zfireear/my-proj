import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//defined a service
@Injectable()
export class HeroService {
  //asynchronous Promise
  getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}

  //get the selected hero
  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}


}
