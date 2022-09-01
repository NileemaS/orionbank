import React from "react";
import {Image, Button, Form} from "react-bootstrap";
import CurrencyInput from 'react-currency-input-field';
import { UserContext } from '../App.js';
import '../App.css' ;
import "../assets/Oval.css";
import Tooltip from "./Tooltip";
import MsgSuccessDisplay from '../assets/MsgSuccess.js';

export default function OvalDiv(props) {
  const [amount, setAmount]     = React.useState(0);
  const [show, setShow]         = React.useState(true);
  const [showErr, setShowErr]   = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const getValues = React.useContext(UserContext);  
  const str = (getValues.users)[getValues.users.length - 1] ;

  const validateAmt = (newAmt) => {
    if (!newAmt){
      setErrorMsg(` Amount is Not Valid! `)
      setShow(false);
      setShowErr(true);
      return false;
    } else
    if (newAmt < 0)  {
      setErrorMsg(` We Do Not Allow Overdraft! `)
      setShow(false);
      setShowErr(true);
      return false;
    } 
    return true;
  }

  function handleOnClick(){
    let newBal = 0
    if (props.takeAction == 'Deposit'){
      newBal = +(((+str.balance) + (+amount) ).toFixed(2))  ;
    } else if (props.takeAction == 'Withdraw') {
      newBal = +(((+str.balance) - (+amount) ).toFixed(2))  ;      
    }
    if(!validateAmt(newBal)) return; 
    str.balance = (newBal);
    setShow(false);
    setShowErr(false);
  } 

  function clearForm(){
    setAmount('');
    setErrorMsg('');
    setShow(true);
    setShowErr(false);
  } 

// automated teller machine (ATM)
  return (
    <>
    <div className="jumbotron bigDiv">
      <div className={`ovaldiv ${props.clsName} txtwhite`}>
        <div className="row">
          <div className="col-sm-3">    
            <Image src="/img/imgwhitebank.jpg" className="imgdeposit" alt="Image"/> 
          </div> 
          <div className="col-sm-9">

          { show ? (
          <>
          <Form className="account-form depoform text-center">
            <div className="text-center">           
              <label className="form-label txtwhite">Available balance is $ ${str.balance} </label>
            </div>
           <hr /> <br/>
            <div className="row">
              <div className="col-sm-3">
                <label className="form-label depolabel">Amount in $  </label> 
              </div>
              <div className="col-sm-9">        
                <CurrencyInput
                  className="form-control form-control-lg depoinput"
                  id="input-deposit"
                  name="input-name-deposit"
                  placeholder=  {`Enter ${props.takeAction} amount `}
                  decimalScale = {2}
                  decimalsLimit={2}
                  maxLength={10}
                  allowNegativeValue={false}
                  onValueChange={(value) => setAmount(value) }
                  autoFocus
                />
              </div>
            </div>            
           <br/>
          <Tooltip content="Fill the amount to enable!" direction="right">
          <Button id="btndeposit" className="pushable text-center" type="submit" disabled={!amount}
            onClick={handleOnClick}>
                <span class="shadow"></span>
                <span class="edge"></span>
              <span className="front">{props.takeAction}</span>
          </Button>
          </Tooltip>
        </Form>
        </> 
         ): ( showErr ?
         ( <>
              <div className="depoform text-center"> <br/>
                <h2> Transaction Failed! </h2> <br/>
                <h3>{errorMsg}</h3> <br/><hr/> <br/>
                <Button type="submit" className="pushable text-center" onClick={clearForm}>
                  <span class="shadow"></span>
                  <span class="edge"></span>
                  <span className="front"> Back to {props.takeAction} </span>
                </Button> 
                <br/>
              </div>
         </> ) :  ( <>         
            <div className="depoform text-center">
              <MsgSuccessDisplay  sendMsg={props.takeAction} amount={amount} />
              <h3>  New Balance is ${str.balance} </h3> <br/>
              <h4> Try Our Other Services too</h4><hr/><br/>
              <Button type="submit" className="pushable text-center" onClick={clearForm}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span className="front"> Back to {props.takeAction} </span>
              </Button> 
              <br/>
            </div> 
          </> )
         )
           }
          <br/>
        </div> 
        </div>                           
    </div>
    </div>
    </>
  )
}

// Documentation //
// Called from: 'Deposit' and 'Withdraw'
// Components: Button, Tooltip, MsgSuccessDisplay, CurrencyInput
// useContext for getting 'name' and updating 'Balance' 
// Description: 'Ovaldiv' displays Amount field and button Deposit or Withdraw
//   which will Add or Subtract the Amount from original Balance
// Toltip is a React component used to display text for 'Deposit/Withdraw' button
// 
// - X - O - X - //