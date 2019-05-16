import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router/src/config';
import { ProdutoService } from 'src/app/produto/produto-service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  providers:[ProdutoService]
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  subsProdutos: Subscription;  
  constructor(private service: ProdutoService) { }

  ngOnInit() {
    this.subsProdutos = this.service.getProducts().subscribe(
      resposta => {
      this.produtos = resposta.json()
      this.service.produtos = this.produtos.slice();
      console.log(this.service.produtos)
      }
    )
  }
  deletar(id){
    console.log(id);
    this.service.deleteProduct(id);
  }

}

export class Produto{
  id: number
  nome: string
  descricao: string
  valor: number
  plataforma:string
  genero:string
  estudio:string
  idadeRecomendada:string
  dataLançamento: DatePipe
  resoluçãoMaxima: string
  tipo:string

  constructor(id, nome, descricao, valor, plataforma, genero, estudio, idade_recomendada, data_lancamento, resolucao_maxima, tipo){
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
    this.plataforma = plataforma;
    this.genero = genero;
    this.estudio = estudio;
    this.idadeRecomendada = idade_recomendada;
    this.dataLançamento = data_lancamento;
    this.resoluçãoMaxima = resolucao_maxima;
    this.tipo = tipo;
  }
}