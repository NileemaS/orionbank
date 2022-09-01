import React from 'react';
import Card from './Card.js'
import {Image} from "react-bootstrap";
import LinkBtnRow from './LinkBtnRow.js';
import DataTable from './dataTable.js';
import '../assets/tData.css';

export default function AllData({}){
  const lnkBtns = [{lName: 'Home',     lHref: '/Home/'}, 
                   {lName: 'Create Account', lHref: '/CreateAccount/'}, 
                   {lName: 'Deposit',  lHref: '/Deposit/'}, 
                   {lName: 'Withdraw', lHref: '/Withdraw/'}, 
                  ];

  return (   
   <div>
      < Card title = "Orion All Data "
        rows = {
        <>
          <div className="dataOuter">
            <div className="row">
              <div className="col-sm-2 "> 
                <div className='ADcircle'>
                  <Image src="/img/bank.png" className="imgAD" alt="Image"/>
                </div>                  
              </div> 
              <div className="col-sm-10">
                <div className="ADbox2">              
                    <h3 className='card-title' style={{padding:"0.5rem"}}><u>Data Table Report</u></h3>
                    <DataTable />              
                </div>
              </div> 
            </div>
          </div>
          <hr/> <br />
          <LinkBtnRow lnkBtns = {lnkBtns} />
         </> 
        }   
        />      
      </div>
    ) ;   
  }

  // Documentation //
// Called from: Navbar, LinkBtnRow of 'Home', 'CreateAccount', 'Withdraw', 'Deposit'
// Components: Card, DataTable, LinkBtnRow
// useContext for displaying 'Name', 'Email', 'Password', 'Balance'
// Description: 'AllData' is a menu option, get the call from navbar to display the data page with 
//  title and body. Body has tabular data of all customers and Print button which is in 'DataTable'
// LinkBtnRow Component is used to give navigation buttons to other menu options pages.
// - X - O - X - //