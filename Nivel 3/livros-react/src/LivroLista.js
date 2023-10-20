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

function LivroLista() {
  const [livro, setLivro] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const carregarDados = () => {
    fetch('/api/livros')
      .then((response) => response.json())
      .then((data) => {
        setLivro(data); // Define o vetor de livros com os dados obtidos
        setCarregado(true); // Define a propriedade carregado como true
      })
      .catch((error) => {
        console.error('Erro ao carregar dados: ' + error);
      });
  };

  return (
    <main>
      <h1>Título da Página</h1>
      {carregado ? (
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>
            {/* {livro.map((livro, index) => (
              <tr key={index}>
                <td>{livro.codigo}</td>
                <td>{livro.título}</td>
                <td>{livro.resumo}</td>
                <td>  <ul> {livro.autores.map((autor, autorIndex) => (<li key={autorIndex}>{autor}</li>)} </ul> </td>
              </tr>
            )} */}
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
}

export default LinhaLivro;

//estou adicionando o livro lista