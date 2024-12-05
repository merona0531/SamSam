import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../src/pages/main/main'
import Trend from './pages/list/region/trend'
import Sport from './pages/list/sport/sport'
import List2 from './pages/list2/list2'
import RecInput from './pages/recomendation/input/input'
import RecResult from './pages/recomendation/result/result'
import Map from './pages/map/MapComponent'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list/byregion" element={<Trend />} />
          <Route path="/list" element={<List2 />} />
          <Route path="/list/bysport" element={<Sport />} />
          <Route path="/recomendation/input" element={<RecInput />} />
          <Route path="/recomendation/result" element={<RecResult />} />
            <Route path="/map" element={<Map />} />

        </Routes>
      </BrowserRouter>
  );
}
export default App;