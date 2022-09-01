import React from "react";
import { Image } from "react-bootstrap";
import Btnlink from "./Btnnavlink";
import '../App.css';

export default function RowTwo() {
  return (
<>

<div className="container text-center">    
  <h3>What We Can Do Today</h3>
  <br/>
  <div className="row">
    <div className="col-sm-3">
      <Image src="/img/imgbitcoin.jpg" className="Image-responsive" style={{width:"70%"}} alt="Image" />
      <h4>We accept <br/> Bitcoins <br/> With Other Currencies</h4>
    </div>
    <div className="col-sm-3"> 
      <Image src="/img/imgbond.jpg" className="Image-responsive" 
      style={{width:"70%"}} alt="Image" />
      <h4>Invest in Our <br/> Bonds</h4>    
    </div>
    <div className="col-sm-3">
      <Btnlink varName = "Create Account" varHref = "/CreateAccount/" />
      <Btnlink varName = "Deposit" varHref = "/Deposit/" />
    </div>
    <div className="col-sm-3">
      <Btnlink varName = "Withdraw" varHref = "/Withdraw/" />
      <Btnlink varName = "All Data" varHref = "/AllData/" />
    </div>  
  </div>

</div>
</>
);}