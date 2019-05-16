import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/produto/produto.component';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core/src/di/injectable';
import { ProdutoService } from 'src/app/produto/produto-service';
import { ConnectionBackend } from '@angular/http';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common/src/pipes';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss'],
  providers: [ProdutoService, HttpModule]
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto;
  produtoForm: FormGroup;
  edit: boolean = false;
  id:any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: ProdutoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.produtoForm = this.fb.group({
        id:[0],
        nome: [''],
        descricao: [''],
        valor: [''],
        plataforma: [''], 
        genero: [''],
        estudio: [''],
        idadeRecomendada: [''],
        dataLançamento: [''],
        resoluçãoMaxima: [''],
        tipo: [''],
      });
      console.log(params.get("id"));
      if(params.get("id")){
        this.id = params.get("id");
        this.edit = true;
        this.service.getProductsbyId(this.id).subscribe( resposta => {
        this.produto = resposta.json()[0];
        console.log(resposta)

        console.log(this.produto)
        
        this.produtoForm.patchValue({
          id: 4,
          nome: '12',
          descricao: this.produto.descricao,
          valor: this.produto.valor,
          plataforma: this.produto.plataforma, 
          genero: this.produto.genero,
          estudio: this.produto.estudio,
          idadeRecomendada: this.produto.idadeRecomendada,
          dataLançamento: this.produto.dataLançamento,
          resoluçãoMaxima: this.produto.resoluçãoMaxima,
          tipo: this.produto.tipo,
        });
        
        console.log(this.produtoForm.value)
      })
      }
      else{
        this.edit = false;
      }
    });
  }
  
  onSubmit(){
    console.log(this.edit);
    if(this.edit){
    this.service.updateProduct(this.produtoForm.value, this.id);    
    }
    else{
    this.service.addProduct(this.produtoForm.value);
    }
  }

}

