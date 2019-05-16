import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/usuario/usuario.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {
  usuario: Usuario;
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.usuarioForm = this.fb.group({
        id: [''],
        nome: [''],
        email: [''],
        senha: [''],
        endereco: this.fb.group({
          cep: [''],
          rua: [''],
          complemento: [''],
          cidade: [''],
          estado: [''],
        })
      });
      if(params.get("id")){
        this.usuario = new Usuario(1, "cabelo", "umeailqualquer@gmail.com", "gestor", "31260-330", "Alvaro Martins", "Apto 303", "Belo Horizonte", "Minas Gerais");
        this.usuarioForm.patchValue({
          id: this.usuario.id,
          nome: this.usuario.nome,
          email: this.usuario.email,
          endereco: {
            cep: this.usuario.endereco.cep,
            rua: this.usuario.endereco.rua,
            complemento: this.usuario.endereco.complemento,
            cidade: this.usuario.endereco.cidade,
            estado: this.usuario.endereco.estado
          }
        });
      }
    });
  }
  
  onSubmit(){
    debugger;
  }

}

