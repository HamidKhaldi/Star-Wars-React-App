import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "../src/store/data-context";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";
import CharacterDetailsPage from "./pages/CharacterDetailPage/CharacterDetailsPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";

function App() {
  return (
    <div className="App">
      <div className="active-breakpoint"></div>
      <DataProvider>
        <Routes>
          <Route path="/" element={<CharacterListPage />} />
          <Route path="/character/:id" element={<CharacterDetailsPage />} />
          <Route path="/favourite-characters" element={<FavouritesPage />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
