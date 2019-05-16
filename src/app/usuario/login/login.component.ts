import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import { Usuario } from '../usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      email: [''],
      senha: ['']
    });
  }

  onSubmit(){
    let email = this.usuarioForm.value.email;
    let senha = Md5.hashStr(this.usuarioForm.value.senha); 
    //retorna usuario se achar
    this.usuario = new Usuario(13, "Gabriel", "g@gmail.com", "gestor", "31260-330", "Alvaro Martins", "Apto 303", "Belo Horizonte", "Minas Gerais"); // Usuário que vai retornar do banco.
    localStorage.usuario_nome = this.usuario.nome;
    localStorage.usuario_tipo = this.usuario.tipo;
    debugger;
  
  }

}
