import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author/:authorId" element={<Author />} />
        <Route path="/item-details/:id" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
