import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];
    
  constructor() { }

  ngOnInit() {
    this.produtos.push(new Produto(1, "Red Dead", "Muito bao", 200))
    this.produtos.push(new Produto(2, "Residente", "Muito bao", 175))
    this.produtos.push(new Produto(3, "Omi ranha", "Muito bao", 150))
  }

}

export class Produto{
  id: number
  nome: string
  descricao: string
  valor: number

  constructor(id, nome, descricao, valor){
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
  }
}