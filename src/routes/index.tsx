import ScrollToTop from "@/components/custom/ScrollToTop";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Root() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
        <ScrollToTop />
      </Main>
      <Footer />
    </>
  );
}

export default Root;
