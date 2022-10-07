import './styles/App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>  
            <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>          
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
