import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Composant/NavBar';
import Accueil from './Pages/Accueil';
import Agents from './Pages/Agents';
import Armes from './Pages/Armes';
import Cartes from './Pages/Cartes';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/Agents' element={<Agents />} />
            <Route path='/Armes' element={<Armes />} />
            <Route path='/Cartes' element={<Cartes />} />

          </Routes>
        </BrowserRouter>
      </div>
      <div className='AppMobile'>Ce site a besoin d'une largeur d'ecran superieur a 950pixel

        <br />
        <p>si vous ete sur ordi aggrandisez la fenetre sinon consulter le site sur une tablette ou ordinateur</p>
      </div>
    </>

  );
}

export default App;
