import React from "react";
import {Image} from "react-bootstrap";
import '../App.css';

export default function RowOne() {
  return (
    <>
    <div className="row" id='rowFirst'> 
    <div className="col-sm-8">
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner text-center" role="listbox">
        <div className="item active">
          <div className='imgsmall'>
            <Image src="/img/bank.png" alt="Image"/>
          </div>
          <div className="carousel-caption bgimg stylefont">
            <h2>The Most Convenient Way <br/>
            To Access The Real Cash</h2> 
          </div>  
        </div>
        <div className="item">
          <div className='imgsmall'>
            <Image src="/img/bank.png"  alt="Image" />
          </div>               
          <div className="carousel-caption bgimg2 stylefont">
            <h2>Building a Bright Financial Future <br />
                    and Good Support</h2>
          </div>      
        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" 
    data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
    <div className="col-sm-4">
    <div className="well">
      <h4>24 hours Customer Support is available <br/> Call 1-800-ask-help</h4>
    </div>
    <div className="well">
       <h4>New branch is coming closer to your home <br /> Visit Us...</h4>
    </div>
    </div>
    </div>
    </>
);}