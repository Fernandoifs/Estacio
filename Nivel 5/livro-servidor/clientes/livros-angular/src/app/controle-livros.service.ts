import { Injectable } from '@angular/core';
import { Livro } from './Livro';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  constructor() {}

  obterLivros(): Promise<Livro[]> {
    return new Promise((resolve, reject) => {
      fetch(baseURL)
        .then((response) => response.json())
        .then((data: LivroMongo[]) => {
          const livros = data.map((livroMongo) =>
            this.converterParaLivro(livroMongo)
          );
          resolve(livros);
        })
        .catch((error) => reject(error));
    });
  }

  incluirLivro(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = this.converterParaLivroMongo(livro);

    return new Promise((observer) => {
      fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livroMongo),
      })
        .then((response) => response.ok)
        .catch((error) => error);
    });
  }

  excluirLivro(codigo: string): Promise<boolean> {
    const url = `${baseURL}/${codigo}`;

    return new Promise((observer) => {
      fetch(url, {
        method: 'DELETE',
      })
        .then((response) => response.ok)
        .catch((error) => error);
    });
  }

  private converterParaLivro(livroMongo: LivroMongo): Livro {
    return {
      codEditora: livroMongo.codEditora,
      codigo: livroMongo._id || '',
      titulo: livroMongo.titulo,
      resumo: livroMongo.resumo,
      autores: livroMongo.autores,
    };
  }

  private converterParaLivroMongo(livro: Livro): LivroMongo {
    return {
      _id: livro.codigo,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };
  }
}
