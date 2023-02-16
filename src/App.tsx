import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "styles/GlobalStyles";

import Navigation from "components/layout/Navigation";
import Footer from "components/layout/Footer";
import Homepage from "pages/Homepage";
import Order from "pages/Order";
import OrderHistory from "pages/OrderHistory";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
