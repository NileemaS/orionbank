import React from 'react';
import { UserContext } from '../App.js';
import Card from './Card.js';
import OvalDiv from "./Ovaldiv.js";
import LinkBtnRow from './LinkBtnRow.js';
import '../assets/Oval.css';

export default function Deposit(){
  const values = React.useContext(UserContext);  
  const str = `Welcome ${(values.users)[values.users.length - 1].name} to Deposit Money `;

  const lnkBtns = [{lName: 'Home',     lHref: '/Home/'}, 
                   {lName: 'Create Account',lHref: '/CreateAccount/'}, 
                   {lName: 'Withdraw', lHref: '/Withdraw/'}, 
                   {lName: 'All Data', lHref: '/AllData/'}, 
                  ];

  return (
    <div>      
     < Card Data-Testid="dtid-title" title = {str }                               
        rows = {
          <>
            <OvalDiv takeAction= 'Deposit' clsName ='box2'/>     
            <br /> <br/> 
              <LinkBtnRow lnkBtns = {lnkBtns} />
            </>
          }            
     />     
 </div>
  )
}

// Documentation //
// Called from: Navbar, LinkBtnRow of 'Home', 'CreateAccount', 'Withdraw', 'AllData
// Components: Card, OvalDiv, LinkBtnRow
// useContext for getting 'Name' to display and updating 'Balance'
// Description: 'Deposit' is a menu option, get the call from navbar to display the Deposit page with 
//  title and body. Body has Amount field and button to Submit which is in 'OvalDiv' Component.
// LinkBtnRow Component is used to give navigation buttons to other menu options pages.
// - X - O - X - //