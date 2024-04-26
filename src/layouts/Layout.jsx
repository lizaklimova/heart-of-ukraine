import { useEffect } from "react";
import { Outlet } from "react-router";
import Footer from "src/components/Footer/Footer";
import Header from "src/components/Header/Header";

const Layout = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#f9f9fc";
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
