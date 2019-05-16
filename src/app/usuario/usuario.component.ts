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
    this.usuarios.push(new Usuario(1, "cabelo", "umeailqualquer@gmail.com", "cliente", "31260-330", "Alvaro Martins", "Apto 303", "Belo Horizonte", "Minas Gerais"))
    this.usuarios.push(new Usuario(2, "major", "umeailqualquer@gmail.com", "cliente", "31260-330", "Alvaro Martins", "Apto 303", "Belo Horizonte", "Minas Gerais"))
    this.usuarios.push(new Usuario(3, "gabriel", "umeailqualquer@gmail.com", "cliente", "31260-330", "Alvaro Martins", "Apto 303", "Belo Horizonte", "Minas Gerais"))
    this.usuarios.push(new Usuario(4, "lucas", "umeailqualquer@gmail.com", "gestor", "31260-330", "Alvaro Martins", "Apto 303", "Belo Horizonte", "Minas Gerais"))
  }

}

export class Usuario{
  id: number
  nome: string
  email: string;
  tipo: string;
  endereco: Endereco;

  constructor(id, nome, email, tipo, cep, rua, complemento, cidade, estado){
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.tipo = tipo;
    this.endereco = new Endereco(cep, rua, complemento, cidade, estado);
  }

  static currentUsuario(tipo){
    if(tipo === null){
      localStorage.usuario_nome; 
    }else{
      localStorage.usuario_tipo === tipo; 
    }
  }
}

class Endereco{
  cep: string;
  rua: string;
  complemento: string;
  cidade: string;
  estado: string;

  constructor(cep, rua, complemento, cidade, estado){
    this.cep = cep;
    this.rua = rua;
    this.complemento = complemento;
    this.cidade = cidade;
    this.estado = estado;
  }
}