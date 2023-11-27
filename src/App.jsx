import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Sub1 from "./page/Sub1";
import Sub2 from './page/Sub2';
import Sub3 from './page/Sub3';
import Sub4 from './page/Sub4';
import Sub5 from './page/Sub5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="sub1" element={<Sub1 />} />
        <Route path="sub2" element={<Sub2 />} />
        <Route path="sub3" element={<Sub3 />} />
        <Route path="sub4" element={<Sub4 />} />
        <Route path="sub5" element={<Sub5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
