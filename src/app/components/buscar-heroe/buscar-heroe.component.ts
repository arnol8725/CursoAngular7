import { Component, OnInit } from '@angular/core';
import { HeroesServices,Heroe} from '../../services/heroes.services';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {

  heroes: Heroe[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,private _heroeServices : HeroesServices,private _router:Router) {

    this.activatedRoute.params.subscribe( params => {

      console.log(params['termino']);
      this.termino=params['termino'];
       this.heroes= this._heroeServices.buscarHeroe(this.termino);
       console.log(this.heroes);
  })
   }

  ngOnInit() {
  }
  enviar(id:Number){
    console.log("el valor enviado ",id);
    this._router.navigate(['/heroe',id]);
  }
}
