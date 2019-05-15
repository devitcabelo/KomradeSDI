import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto/produto.component';

@Component({
  selector: 'app-produto-show',
  templateUrl: './produto-show.component.html',
  styleUrls: ['./produto-show.component.scss']
})
export class ProdutoShowComponent implements OnInit {
  produto: Produto;
  constructor() { }

  ngOnInit() {
    this.produto = new Produto(1, "Red Dead", "Muito bao", 200);
  }

}
