import React from "react";

const Btnlink = (props)=> {
  return (
    <>
    <div className="well btnrow2">
       <a href={props.varHref}  className="stylefontalink"
         data-replace={props.varName}><span>{props.varName}</span> </a>
     </div>
    </>
  );
}
export default Btnlink;