import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario/usuario.component';

@Component({
  selector: 'app-usuario-show',
  templateUrl: './usuario-show.component.html',
  styleUrls: ['./usuario-show.component.scss']
})
export class UsuarioShowComponent implements OnInit {
  usuario: Usuario;
  constructor() { }

  ngOnInit() {
    this.usuario = new Usuario(1, "lucas", "umeailqualquer@gmail.com", "gestor", "31260-330", "Alvaro Martins", "Apto 303", "Belo Horizonte", "Minas Gerais");
  }

}
