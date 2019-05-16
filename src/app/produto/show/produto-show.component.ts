import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto/produto.component';
import { ProdutoService } from 'src/app/produto/produto-service';

@Component({
  selector: 'app-produto-show',
  templateUrl: './produto-show.component.html',
  styleUrls: ['./produto-show.component.scss'],
  providers: [ProdutoService]
})
export class ProdutoShowComponent implements OnInit {
  produto: Produto;
  constructor() { }

  ngOnInit() {
    //this.produto = new Produto(1, "Red Dead", "Muito bao", 200);
  }

}
