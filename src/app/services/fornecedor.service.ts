import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Fornecedor } from '../models/fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private dbService: DbService) { }

  addFornecedor(fornecedor: Fornecedor) {
    return this.dbService.fornecedores.add(fornecedor);
  }

  getFornecedorById(id: number) {
    return this.dbService.fornecedores.get(id);
  }

  getAllFornecedores(): Promise<Fornecedor[]> {
    return this.dbService.fornecedores.toArray();
  }

  updateFornecedor(fornecedor: Fornecedor) {
    return this.dbService.fornecedores.put(fornecedor);
  }

  deleteFornecedor(id: number) {
    return this.dbService.fornecedores.delete(id);
  }
}
