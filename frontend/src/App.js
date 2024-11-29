import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../src/pages/main/main'
import Trend from './pages/list/region/trend'
import Sport from './pages/list/sport/sport'
import List from './pages/list/list'
import RecInput from './pages/recomendation/input/input'
import RecResult from './pages/recomendation/result/result'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list/byregion" element={<Trend />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/bysport" element={<Sport />} />
          <Route path="/recomendation/input" element={<RecInput />} />
          <Route path="/recomendation/result" element={<RecResult />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;