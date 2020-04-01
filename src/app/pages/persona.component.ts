import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { PersonasService  } from '../../servicios/personas.service';
import { PersonaModel } from 'src/app/models/persona.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
  
})

export class PersonaComponent  implements OnInit{

persona:PersonaModel = new PersonaModel();

    constructor(private personaService: PersonasService,
                private route: ActivatedRoute){}

    ngOnInit(){
      const id = this.route.snapshot.paramMap.get('id');
      if ( id !== 'nuevo'){
        this.personaService.getPerson ( id )
        .subscribe( (respuesta: PersonaModel) => {
          this.persona = respuesta;
          this.persona.id = id;
        });
      }
    }

    guardarpersona( form: NgForm){
        if( form.invalid ){
          console.log("formulario no válido");
          return;
        }


        Swal.fire({
          title: 'Modificando registro',
          text: 'Guardando información',
          icon: 'info',
          allowOutsideClick: false,
          confirmButtonText: 'Cool'
        });
        Swal.showLoading();
        let peticion: Observable<any>;


        if( this.persona.id ) {
         peticion = this.personaService.actualizarPersona(this.persona);
        } else {
         peticion =  this.personaService.crearPersona(this.persona);
        }

        peticion.subscribe( respuesta => {
          Swal.fire({
            title: this.persona.nombre,
            text: 'Registro actualizado',
            icon: 'success',
          });
        });

    }









// persona: any = {};


//   constructor( private activatedRoute: ActivatedRoute, 
//                private _personaService: PersonasService 
//                ) {

//     this.activatedRoute.params.subscribe ( params => {
//       this.persona = this._personaService.getPerson( params['id'] );
//     })

//    }


}
