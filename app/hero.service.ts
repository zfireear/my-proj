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

}
