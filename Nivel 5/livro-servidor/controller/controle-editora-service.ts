import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras = [
    { codEditora: 1, nome: 'Editora A', endereco: 'Rua A, 123' },
    { codEditora: 2, nome: 'Editora B', endereco: 'Rua B, 456' },
    { codEditora: 3, nome: 'Editora C', endereco: 'Rua C, 789' },
    // Adicione mais editoras conforme necessário
  ];

  getEditoras() {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(
      (editora) => editora.codEditora === codEditora
    );

    return editoraEncontrada?.nome;
  }
}
