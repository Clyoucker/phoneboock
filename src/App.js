import React from "react";
import {Routes, Route } from "react-router-dom";

import PhoneBoock from "./templates/phoneboock";

import Header from "./components/base/header";
import Footer from "./components/base/footer";

export default class App extends React.Component{

  render(){
    return (
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<PhoneBoock />} />
        </Routes>
        <Footer />
      </div>
    )
  }
}

