import React from "react";
import "./style.css";
import Layout from './components/Layout/Layout';
// import TextField from "@mui/material/TextField";

export default function App() {
  return (
    <Layout>
  <div className="about">
    <div className="container">
      <div className="row">
        <div className="col-6 p-25">
        <h3>About us</h3>
    <h1>Welcome to Trafo</h1>
    <p>PDFelement Lite. PDFelement Lite is an all-in-one PDF editor and converter that can be used to read, edit, annotate, .</p>
    <div className="about__btn">
      <a href="" className="btn btn-smart">READ MORE</a>
    </div>
        </div>
        <div className="col-6">
          <div className="about__img">
            <img src="images/4141245.jpg" alt="blank"></img>
          </div>

        </div>
      </div>
    </div>
  </div>
  </Layout>
    
  );
}
