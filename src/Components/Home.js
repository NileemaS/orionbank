import React from 'react';
import Card from './Card.js';
import RowOne from './RowOne.js' ;
import RowTwo from './RowTwo.js' ;


export default function Home(){
  
  return (
 <div>
    < Card title = "Welcome to Orion ATM"
      rows = { 
        <>  <RowOne /> <hr/>
            <RowTwo /> </> }       
    />
  </div>
   
  );  
}

