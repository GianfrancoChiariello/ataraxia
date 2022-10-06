import './styles/App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main';
import { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState([])

  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/items/:id' element={
          <Main items={state}/>
        }/>
        <Route exact path='/categorias/:categoria' element={
          <Main items={state}/>
        }/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
