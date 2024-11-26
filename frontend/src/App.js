import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../src/pages/main/main'
import Trend from '../src/pages/trend/trend'
import RecInput from './pages/recomendation/input/input'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/recomendation/input" element={<RecInput />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;