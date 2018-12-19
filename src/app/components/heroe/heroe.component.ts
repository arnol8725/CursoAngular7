import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Heroe,HeroesServices } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'

})
export class HeroeComponent implements OnInit {

   heroe:Heroe;

  constructor(private activatedRoute:ActivatedRoute,private _heroeServices : HeroesServices ) { 
    
    this.activatedRoute.params.subscribe( params => {

        console.log(params['id']);
        this.heroe= this._heroeServices.getHeroesId(params['id']);
        console.log(this.heroe);

    })


  }

  ngOnInit() {
  }

}
