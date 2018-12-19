import { Component, OnInit } from '@angular/core';
import { HeroesServices,Heroe} from '../../services/heroes.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
  
})
export class HeroesComponent implements OnInit {

   heroes: Heroe[] = [];
  
  constructor(private _heroesService:HeroesServices,
              private _router :Router
    ) { 
    console.log("constructor ");
  }

  ngOnInit() {
    console.log("ngOnInit ");
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);


  }
  enviar(id:Number){
    console.log("el valor enviado ",id);
    this._router.navigate(['/heroe',id]);
  }
}
