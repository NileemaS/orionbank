import React from 'react';
import Btnlink from './Btnnavlink.js';

export default function LinkBtnRow(props) {

return (
    <>
        <div className="container-fluid bg-3 text-center">    
          <h3>Other Services</h3><br/>
          <div className="row">

            {props.lnkBtns.map( (lnk)=> ( 
                <>   
                <div class="col-sm-3">
                <Btnlink varName={lnk.lName} 
                    varHref={lnk.lRef} />  
                </div>
                </>
            ) ) }

          </div>
        </div>      
    </>
)
}