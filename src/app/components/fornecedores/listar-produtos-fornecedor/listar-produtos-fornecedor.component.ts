import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../models/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';

@Component({standalone: true,
  selector: 'app-listar-produtos-fornecedor',
  imports: [],
  templateUrl: './listar-produtos-fornecedor.component.html',
  styleUrls: ['./listar-produtos-fornecedor.component.css']})

export class ListarProdutosFornecedorComponent implements OnInit {
  produtos: Produto[] = [];
  fornecedorId!: number;
  nomeFornecedor!: string;
  fornecedorService: any;
  router: any;
  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) { }
  ngOnInit() {
    this.fornecedorId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProdutosByFornecedorId(this.fornecedorId);
    this.getNomeFornecedorById(this.fornecedorId).then(()=>{
      console.log("Nome fornecedor: ", this.nomeFornecedor);
    });
  }
  async getProdutosByFornecedorId(fornecedorId: number) {
    this.produtos = await this.produtoService.getProdutosByFornecedorId(fornecedorId);
  }
  async getNomeFornecedorById(fornecedorId: number) {
    const fornecedor = await this.fornecedorService.getFornecedorById(fornecedorId);
    if (fornecedor) {
      this.nomeFornecedor = fornecedor.nome;
    }
    else {
      this.nomeFornecedor = "Fornecedor não existente!";
    }
  }

}
