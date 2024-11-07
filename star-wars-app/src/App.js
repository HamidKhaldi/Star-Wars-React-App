import "./App.scss";
import { Routes, Route } from "react-router-dom";
import store  from "./store/store";
// import { DataProvider } from "../src/store/data-context";
import Header from "./components/Header/Header";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";
import CharacterDetailsPage from "./pages/CharacterDetailPage/CharacterDetailsPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      {/* <DataProvider> */}
        <Header />
        <Routes>
          <Route path="/" element={<CharacterListPage />} />
          <Route path="/character/:id" element={<CharacterDetailsPage />} />
          <Route path="/favourite-characters" element={<FavouritesPage />} />
        </Routes>
      {/* </DataProvider> */}
      </Provider>
    </div>
  );
}

export default App;
