import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const DefaultPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultPage;
