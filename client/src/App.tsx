import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import ResultsPage from './components/pages/ResultsPage/ResultsPage';
import DetailPage from './components/pages/DetailPage/DetailPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/items' element={<ResultsPage />} />
        <Route path='/items/:id' element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
