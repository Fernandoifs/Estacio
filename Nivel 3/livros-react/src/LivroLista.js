import { ControleLivros } from '../controle/ControleLivros';
import { ControleEditora } from '../controle/ControleEditora';

function LinhaLivro(props) {
  const { livro, excluir } = props;

  const handleDelete = () => { excluir(livro.codigo); }

  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td> <button onClick={handleDelete}> Excluir </button> </td>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul></td>

    </tr>
  );
}

export default LinhaLivro;

//estou adicionando o livro lista