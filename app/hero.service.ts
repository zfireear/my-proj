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
  
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  
  private headers = new Headers({'content-type':'application/json'});
  
  //update the hero detial change to server data
  update(hero:Hero):Promise<Hero>{
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.put(url,JSON.stringify(hero),{headers:this.headers})
                .toPromise()
                .then(()=>hero)
                .catch(this.handleError);
  }

  //add a hero to heroes list of server data
  create(name:string):Promise<Hero>{
    return this.http.post(this.heroesUrl,JSON.stringify({name:name}),{headers:this.headers})
            .toPromise()
            .then(res=>res.json().data)
            .catch(this.handleError);
  }

  delete(id:number):Promise<void>{
      const url = `${this.heroesUrl}/${id}`;
      return this.http.delete(url,{headers:this.headers})
                  .toPromise()
                  .then(()=>null)
                  .catch(this.handleError);
  }


}
