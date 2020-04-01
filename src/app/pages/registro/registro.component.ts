import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel= new UsuarioModel();
  recordarme =  false;
  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() { }

   onSubmit( form: NgForm ){
     if(form.invalid) { return ;}

        Swal.fire({
          allowOutsideClick: false,
          icon: 'info',
          text: 'espere, por favor'
        });
        Swal.showLoading();
    
        this.auth.nuevoUsuario( this.usuario ).subscribe( respuesta => {
          console.log(respuesta);
          Swal.close();
          //recordamos usuario si esta marcado el check
          if ( this.recordarme ){
                  localStorage.setItem('email', this.usuario.email);
          }
          //redireccionamos si el registro es correcto
          this.router.navigateByUrl('/home');
        }, (err) => {
          console.error(err.error.error.message);
          Swal.fire({
            allowOutsideClick: false,
            icon: 'error',
            title: 'Error al autentificar',
            text: err.error.error.message
          });
        });
   } 

}
