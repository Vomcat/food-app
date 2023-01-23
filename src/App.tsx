import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "styles/GlobalStyles";

import Navigation from "components/layout/Navigation";
import Footer from "components/layout/Footer";
import Homepage from "pages/Homepage";
import Order from "pages/Order";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
