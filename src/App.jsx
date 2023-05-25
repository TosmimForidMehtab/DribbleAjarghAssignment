import BodyFoot from "./components/BodyFoot";
import Footer from "./components/Footer";
import FooterImages from "./components/FooterImages";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TextBody from "./components/TextBody";
function App() {

  return (
    <>
      {/* NAvBar */}
      <NavBar />
      {/* Header with Company Logo */}
      <Header />
      {/* Company Logo with Hire Me Button */}
      <BodyFoot />
      {/* Images + Video Cards */}
      <FooterImages />
      {/* Other Links */}
      <Footer />
    </>
  );
}

export default App;
