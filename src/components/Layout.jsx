import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="container">
      
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};