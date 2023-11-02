import { Component, OnInit } from '@angular/core';
import { Editora } from '../Editora';
import { Livro } from '../Livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  public editoras: Editora[] = [];
  public livros: Livro[] = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;

  constructor(
    servEditora: ControleEditoraService,
    servLivros: ControleLivrosService
  ) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
  }
  ngOnInit(): void {
    this.servEditora.getEditoras().subscribe((editoras) => {
      this.editoras = editoras;
      console.log('Editoras disponíveis:', this.editoras.map(e => e.codEditora));
    });

    this.servLivros.obterLivros().subscribe((livros) => {
      this.livros = livros;
    });
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluirLivro(codigo).subscribe(() => {
      this.servLivros.obterLivros().subscribe((livros) => {
        this.livros = livros;
        console.log('Códigos das editoras nos livros:', this.livros.map(l => l.codEditora));
      });
    });
  };

  obterNome = (codEditora: number): Observable<string | undefined> => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
