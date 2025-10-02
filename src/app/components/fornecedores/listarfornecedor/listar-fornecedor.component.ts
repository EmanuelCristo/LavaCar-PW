import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../../models/fornecedor.model';
import { FornecedorService } from '../../../services/fornecedor.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-fornecedor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './listar-fornecedor.component.html',
  styleUrls: ['./listar-fornecedor.component.css']
})
export class ListarFornecedorComponent implements OnInit {
  fornecedores: Fornecedor[] = [];
  filtro = new FormControl('');

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.fornecedores = await this.fornecedorService.getAllFornecedores();
  }

  getFornecedoresFiltrados(): Fornecedor[] {
    const filtroValue = this.filtro.value?.toLowerCase() || '';
    return this.fornecedores.filter(f =>
      f.nome?.toLowerCase().includes(filtroValue)
    );
  }

  editFornecedor(id: number) {
    this.router.navigate(['/fornecedores/editar', id]);
  }

  async deleteFornecedor(id: number) {
    await this.fornecedorService.deleteFornecedor(id);
    this.fornecedores = await this.fornecedorService.getAllFornecedores();
  }

  viewProdutosFornecedor(id: number) {
    this.router.navigate(['/fornecedores/produtos', id]);
  }
}
