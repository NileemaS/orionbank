import React from 'react';
import Card from './Card.js'
import LinkBtnRow from './LinkBtnRow.js';
import FormAccount from './formAccount.js';

export default function CreateAccount(){
  const lnkBtns = [{lName: 'Home',     lHref: '/Home/'}, 
                   {lName: 'Deposit',  lHref: '/Deposit/'}, 
                   {lName: 'Withdraw', lHref: '/Withdraw/'}, 
                   {lName: 'All Data', lHref: '/AllData/'}, 
                  ];

  return (   
   <div>
      < Card 
        rows = {
        <>
          <FormAccount />     
          <br /> <br/> <br />
          <LinkBtnRow lnkBtns = {lnkBtns} />
         </> 
        }   
        />      
      </div>
    ) ;   
  }
 
// Documentation //
// Called from: Navbar, LinkBtnRow of 'Home', 'Deposit', 'Withdraw', 'AllData
// Components: Card, FormAccount, LinkBtnRow
// useContext for updating 'Name','Email, 'Password', and default 'Balance = 100'
// Description: 'CreateAccount' is a menu option, get the call from navbar to display the Create 
//    account page with title and body. Body has 3 input fields to enter name, email and password
//    and button to Submit which is in 'FormAccount' Component.
// LinkBtnRow Component is used to give navigation buttons to other menu options pages.
// - X - O - X - //


