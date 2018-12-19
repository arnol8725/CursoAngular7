import { Component, OnInit, inject,Input,Output,EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.services';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:Heroe;
  @Input() id:number;

  @Output() heroeSeleccionado : EventEmitter<number>;
 
  constructor(private _router :Router) {
    console.log('valor de id',this.id);
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  enviar(id:number){
    //console.log("el valor enviado ",id);
    //this._router.navigate(['/heroe',this.id]);
    this.heroeSeleccionado.emit(Number(id));
  }
}
