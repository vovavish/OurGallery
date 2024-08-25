import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Album from './pages/Album'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/album/:album" element={<Album />}></Route>
        <Route path="/album/:album/:imageId" element={<Album />}></Route>
      </Routes>
    </div>
  );
}

export default App;
