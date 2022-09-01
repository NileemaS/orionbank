import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/navbar';
import Home from "./Components/Home";
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import AllData from './Components/alldata';

export const UserContext = React.createContext();

const users = [{name:'abel',email:'abel@mit.edu',password:'secret', balance:100},
                        {name:'Dolly',email:'Dolly@mit.edu',password:'secret2', balance:150},
                        {name:'Jay',email:'Jay@mit.edu',password:'secret3', balance:200},
                        {name:'Meg',email:'Meg@mit.edu',password:'secret4', balance:300},
                        {name:'Sunset',email:'Sunset@mit.edu',password:'secret5', balance:500},
                        {name:'Dolly2',email:'Dolly2@mit.edu',password:'secret02', balance:150},
                        {name:'Jay2',email:'Jay2@mit.edu',password:'secret03', balance:200},
                        {name:'Meg2',email:'Meg2@mit.edu',password:'secret04', balance:300},
                        {name:'Sunset2',email:'Sunset2@mit.edu',password:'secret05', balance:500},
                        {name:'Dolly3',email:'Dolly21@mit.edu',password:'secret021', balance:150},
                        {name:'Jay3',email:'Jay21@mit.edu',password:'secret031', balance:200},
                        {name:'Meg3',email:'Meg21@mit.edu',password:'secret041', balance:300},
                        {name:'Sunset3',email:'Sunset21@mit.edu',password:'secret051', balance:500},
                ] ;

function App() {
  return (
    <BrowserRouter>
      <div className="outerbg1">
        <div className="outerbg2">
        <NavBar/>   
        <UserContext.Provider value={{users}}>        
        <Routes>
        <Route exact path="/" element={<Home />} />
         <Route path="/Home" element={<Home />} />
         <Route path="/CreateAccount/" element={<CreateAccount />} />
         <Route path="/deposit/" element={<Deposit />} />
         <Route path="/withdraw/" element={<Withdraw />} />
         <Route path="/alldata/" element={<AllData />}/>
        </Routes>
        </UserContext.Provider>
        </div>
      </div>
     
    </BrowserRouter>     

  );
}

export default App;
