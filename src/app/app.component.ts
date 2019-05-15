import { Component } from '@angular/core';
import { Usuario } from './usuario/usuario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Komrade';
  usuario: Usuario;

  ngOnInit(){
    this.usuario;
    localStorage.usuario_nome = this.usuario.nome;
    localStorage.usuario_tipo = this.usuario.tipo;
  }

  currentUsuario(tipo){
    if(tipo === null){
      localStorage.usuario_nome; 
    }else{
      localStorage.usuario_tipo === tipo; 
    }
  }
}
