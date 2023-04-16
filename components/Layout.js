import Footer from "./Footer"
import HamburgerMenu from "./HamburgerMenu"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <HamburgerMenu />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout