import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function Home(props) {
  const mainColors = JSON.parse(localStorage.getItem('mainColors')) || {};
  return (
    <>
      <Header mainColors={mainColors}/>
      <Content />
      <Footer />
    </>
  );
}
