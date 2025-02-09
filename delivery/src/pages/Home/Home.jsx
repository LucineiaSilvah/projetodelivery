import React from "react";
import { Global } from "../../StyleGlobal";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Highlight from "../../components/Highlight/Highlight";
import Sabores from "../../components/Sabores/Sabores";
import Whats from "../../components/Whats/Whats";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Global />
      <Header />
      <Banner />
      <Highlight />
      <Sabores />
      <Whats />
      <Footer />
    </>
  );
};

export default Home;
