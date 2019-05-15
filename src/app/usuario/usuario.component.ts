import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
    
  constructor() { }

  ngOnInit() {
    this.usuarios.push(new Usuario(1, "cabelo", "umeailqualquer@gmail.com", "cliente"))
    this.usuarios.push(new Usuario(2, "major", "umeailqualquer@gmail.com", "cliente"))
    this.usuarios.push(new Usuario(3, "gabriel", "umeailqualquer@gmail.com", "cliente"))
    this.usuarios.push(new Usuario(4, "lucas", "umeailqualquer@gmail.com", "gestor"))
  }

}

export class Usuario{
  id: number
  nome: string
  email: string;
  tipo: string;

  constructor(id, nome, email, tipo){
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.tipo = tipo;
  }
}