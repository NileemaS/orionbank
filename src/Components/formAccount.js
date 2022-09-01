import React from 'react';
import { Button} from "react-bootstrap" ;
import { UserContext } from '../App.js';
import Tooltip from "./Tooltip";

export default function FormAccount({}){
  const [show, setShow]         = React.useState( true );
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [btnDisabled, setBtnDisabled] = React.useState( true );

  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if ((!field) || (label == 'password' && password.length < 9) ){
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        setShow(true);
        return false;
      }
      return true;
  }
  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setBtnDisabled (true);
  } 
   
  const chkDataFilled = ()=> {
    if (name !== '' && email !== '' && password !== '') {
      return setBtnDisabled (false);
    }
    return;
  }

return (
  <>

<section className="text-center">

  <div className="p-5 bg-image acctimg"></div>

  <div className="card mx-4 mx-md-5 shadow-5-strong acctdiv" >
    <div className="card-body py-5 px-md-5">

    { show ? (  
      <> 
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-5">Create Account</h2>
          <form>
            <div className="form-outline mb-4">
              <input type="text" id="acctname" className="form-control form-control-lg" 
                placeholder="Enter name" value={name} maxlength="30"
                onChange={e => {setName(e.currentTarget.value);
                                chkDataFilled();} }
                required autoFocus/>
              <label className="form-label">First name* </label>
            </div>
 
            <div className="form-outline mb-4">
              <input type="email" id="acctemail" className="form-control form-control-lg"
                placeholder="Enter email" value={email} maxlength="40"
                onChange={e => {setEmail(e.currentTarget.value);
                                chkDataFilled();}} required />
              <label className="form-label">Email address*</label>
            </div>
     
            <div className="form-outline mb-4">
              <input type="password" id="acctpwd" className="form-control form-control-lg"
                placeholder="Enter password" value={password} 
                minlength="8" maxlength="15"
                onChange={e => {setPassword(e.currentTarget.value);
                                chkDataFilled();}} required />
              <label className="form-label">Password*</label>
            </div>
            <div className="example-wrapper">
              <Tooltip content="Fill Name, Email & Password to enable!" direction="right">
                <Button type="submit" className="btn btn-danger btn-lg" 
                  onClick={handleCreate} disabled={btnDisabled} > Create Account      
                </Button>          
              </Tooltip>
            </div>            
          </form>
        </div>
      </div>
      </>
      ):(
        <>    
          <h3>Congratulations! Success !!</h3><br/>
          <h4>Welcome {name} To Orion Bank! <br /> Try Our Other Services too!</h4><br/><br/>
          <Button type="submit" className="btn btn-danger btn-lg" onClick={clearForm}
            disabled={!name || !email || !password} >
            Add another account
          </Button>  
        </>
      )
    }
    </div>
    </div>
</section>
    </>
  ) ;   
}

/*
<span className="example-emoji" role="img" aria-label="cowboy emoji">
  🤠
</span>
*/
// Documentation //
// Called from: 'createaccount'
// Components: Button, Tooltip
// useContext for updating 'name, 'email,'password','Balance' 
// Description: 'FormAccount' displays input fields for name, email and password and button 
//    to create new customer with default balance $100.
//  It will do all the validations like name, email, password should be filled, 
//  email should gave valid email and password should be minimum 8char long. 
// Toltip is a React component used to display text for 'Create Account' button
// 
// - X - O - X - //