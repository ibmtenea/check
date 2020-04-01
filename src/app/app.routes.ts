// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home.component';

// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { PerfilPage } from './pages/perfil.pages';
// import { PersonasPage } from './pages/personas.pages';
// import { ConfiguracionPage } from './pages/configuracion.pages';
// import { DescargaPage } from './pages/descarga.pages';
// import { HistoricoPage } from './pages/historico.pages';
 
// import { RegistroComponent } from './pages/registro/registro.component';
// import { LoginComponent } from './pages/login/login.component';


// const APP_ROUTES: Routes = [

//  { path: 'home', component: HomeComponent},
//  { path: 'historico', component: HistoricoPage },
//  { path: 'descarga', component: DescargaPage },
//  { path: 'configuracion', component: ConfiguracionPage },
//  { path: 'personas', component: PersonasPage },
// // { path: 'resultadopersonas/:termino', component: ResultadoPersonasComponent },
// // { path: 'persona/:id', component: PersonaComponent },
// { path: 'login'   , component: LoginComponent },
// { path: 'registro', component: RegistroComponent },
// { path: 'perfil', component: PerfilPage },
// //{ path: '**', redirectTo: 'login' }
// { path: '**',  redirectTo: '/registro'}    
// ];

// @NgModule({
//     imports:[
//         RouterModule.forRoot ( APP_ROUTES, {useHash:false})
//     ],
//     exports: [ RouterModule ]
// })

// export class AppRoutingModule {}
// //CON HASH (??) export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES ,{useHash:true});
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);






import { Routes} from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PersonasPage } from './pages/personas.pages';

export const routes: Routes = [
  { path: 'home' , component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'personas' , component: PersonasPage, canActivate: [ AuthGuard ] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: '**', redirectTo: '/login' }
];


//export class AppRoutingModule { }

