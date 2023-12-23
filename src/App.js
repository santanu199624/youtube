
import './App.css';
import {AppContext} from "./context/ContextApi"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './component/Feed/Feed';
import Header from './component/Header/Header';
import SearchResult from './component/SearchResult/SearchResult';

function App() {
  
  return (
    <AppContext>
      <BrowserRouter>
        <div className="App flex flex-col h-full">
          <Header />
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
            {/* <Route path='/video/:id' element={<VideoDetails />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
