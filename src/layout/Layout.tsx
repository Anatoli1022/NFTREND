import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className='m-auto mt-20 max-w-5xl'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
