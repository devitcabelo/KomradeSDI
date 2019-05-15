import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/produto/produto.component';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto;
  produtoForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.produtoForm = this.fb.group({
        id: [''],
        nome: [''],
        descricao: [''],
        valor: [''],
      });
      if(params.get("id")){
        this.produto = new Produto(1, "Red Dead", "Muito bao", 200);
        this.produtoForm.patchValue({
          id: this.produto.id,
          nome: this.produto.nome,
          descricao: this.produto.descricao,
          valor: this.produto.valor,
        });
      }
    });
  }
  
  onSubmit(){
    debugger;
  }

}

