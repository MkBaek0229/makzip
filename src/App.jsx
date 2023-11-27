import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Sub1 from "./page/Sub1";
import Header from "./components/Header";
import Sidebar from "./page/sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="sub1" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
