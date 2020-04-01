import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme= false;

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if ( localStorage.getItem('email') ){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
      }
  }


  login(form:NgForm){
       if( form.invalid ){ return; }

        //alerts de sweet al efectuar el submit
        Swal.fire({
          allowOutsideClick: false,
          icon: 'info',
          text: 'espere, por favor'
        });
        Swal.showLoading();
        this.auth.login( this.usuario) .subscribe ( respuesta => {
          //accedemos con exito
          Swal.close();
          console.log(respuesta);
          //recordamos usuario si esta marcado el check
          if ( this.recordarme ){
            localStorage.setItem('email', this.usuario.email);
          }
          //redireccionamos
          this.router.navigateByUrl('/home');
        }, (err) => {
          console.log(err.error.error.message);
          //han habido errores de autenticacion
          Swal.fire({
            allowOutsideClick: false,
            icon: 'error',
            title: 'Error al autentificar',
            text: err.error.error.message
          });
        });
  }

}
