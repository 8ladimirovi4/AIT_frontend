import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";

// Pages
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Users from "pages/Users/Users";
import Clients from "pages/Clients/Clients";
import { Apple, Facebook, Sega } from "pages/Clients/components";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/apple" element={<Apple />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/sega" element={<Sega />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
