import Main from "./pages/main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Business from "./pages/business";
import Nfts from "./pages/nfts";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/businessnews' element={<Business />} />
        <Route exact path='/nfts' element={<Nfts />} />
      </Routes>
    </Router>
  );
}

export default App;
