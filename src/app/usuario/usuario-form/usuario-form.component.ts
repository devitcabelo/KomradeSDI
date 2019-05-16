import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/usuario/usuario.component';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

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
      });
      if(params.get("id")){
        this.usuario = new Usuario(1, "cabelo", "umeailqualquer@gmail.com","2");
        this.usuarioForm.patchValue({
          id: this.usuario.id,
          nome: this.usuario.nome,
          email: this.usuario.email
        });
      }
    });
  }
  
  onSubmit(){
    debugger;
  }

}

