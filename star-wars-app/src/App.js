import './App.scss';
import { Routes, Route } from 'react-router-dom';
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';
import CharacterDetailsPage from './pages/CharacterDetailPage/CharacterDetailsPage';

function App() {
  return (
    <div className="App">
      <div className="active-breakpoint"></div>
      <Routes>
         <Route path='/' element = {<CharacterListPage />} />
          <Route path='/character/:id' element = {<CharacterDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

