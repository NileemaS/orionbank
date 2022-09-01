import React from "react";
import {Image} from "react-bootstrap";
import '../App.css';

export default function RowThree() {
    return (
<>

<div className="container text-center">    
  <h3> Why Choose Us</h3>
  <br/>
  <div className="row footerbg">
    <div className="col-sm-2">
      <Image src="/img/imgusa.jpg" className="Image-responsive imgfooter" 
       alt="USA Map Image" />
      <h5>Branches in <br/> Every State</h5>
    </div>
    <div className="col-sm-2"> 
      <Image src="/img/imgcustcare.jpg" className="Image-responsive imgfooter" 
         alt="Customer Care Image" />
      <h5>24hrs Online <br/> Customer Care</h5>    
    </div>
    <div className="col-sm-2"> 
      <Image src="/img/imgloans.jpg" className="Image-responsive imgfooter" 
       alt="Loans Image" />
      <h5>Our Loan <br/> Services</h5>
    </div>
    <div className="col-sm-2"> 
      <Image src="/img/imgretirement.png" className="Image-responsive imgfooter" 
       alt="Retirement plans Image" />
      <h5>Retirement Saving <br/> plans</h5>
    </div> 
    <div className="col-sm-2"> 
      <Image src="/img/imgtransfer.png" className="Image-responsive imgfooter"
      alt="Money transfer Image" />
      <h5>Easy Transfer to <br/> World Wide Banks</h5>
    </div>     
    <div className="col-sm-2"> 
      <h4>Head Quarter</h4> <br/> <h5>121 New York City <br/> NY 00001
      <br/>support@orionbnk.com <br/> 1-800-123-4567
      <br/></h5>
    </div> 
  </div>
  </div>
  </>
);}