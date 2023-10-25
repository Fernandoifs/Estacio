import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LivroLista from './componentes/LivroLista';


function App() {
  return (
    <div className="App">
      <div>
        <LivroLista />
      </div>
    </div>
  );
}

export default App;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import LivroLista from './componentes/LivroLista';
// import LivroDados from './componentes/LivroDados';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <Switch>
//             <Route path="/" element={<LivroLista />} />
//             <Route path="/dados" element={<LivroDados />} />
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;
