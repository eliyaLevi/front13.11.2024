import Header from "./header/Header";
import Main from "./main/Main";
import { Footer } from "./footer/Footer";


export const Layout = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main  />
        <Footer />
      </div>
    </>
  );
};
