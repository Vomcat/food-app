import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "styles/GlobalStyles";

import Navigation from "components/layout/Navigation";
import Footer from "components/layout/Footer";
import Homepage from "pages/Homepage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
