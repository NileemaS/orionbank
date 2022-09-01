import { NavLink } from "react-router-dom";
import changeBC from "../assets/ChangeBC" ;

function NavBar(){
  const tabs = ['Home', 'CreateAccount', 'Deposit', 'Withdraw', 'AllData']

  return (
    <div className="m-4 navfont">
      <nav className="nav nav-tabs nav-fill bg-light">

        {tabs.map((tab, i) => (
          <NavLink 
            to= {`/${tab}`} 
            className= "nav-item nav-link"
            style={ ({ isActive }) => changeBC(isActive) }
            key={ tab + i }
          > <div className="divhover">{tab} </div>
          </NavLink>
        ) ) }     
      
      </nav> 
    </div>
  )
}
export default NavBar;