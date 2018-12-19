
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {BuscarHeroeComponent} from './components/buscar-heroe/buscar-heroe.component';


const APP_ROUTER: Routes = [
	/*{path: '', redirectTo: '/productos',
    pathMatch: 'full'},*/
    {path: 'home', component: HomeComponent},	
    {path: 'about', component: AboutComponent},	
    {path: 'heroes', component: HeroesComponent},	
    {path: 'heroe/:id', component: HeroeComponent},	    
    {path: 'busquedaheroes/:termino', component: BuscarHeroeComponent},	    
	{path: '**', pathMatch:'full', redirectTo: 'home'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTER);