import React from 'react';
import RowThree from './RowThree.js';

export default function Card(props){
    return (
        <>
        <div className="container text-center">
            <div className="card">
             { props.title && <div className="card-header"> <h3 className='stylefonttitle'> {props.title} </h3></div>  }

             { props.rows &&  <div className="card-body">   
                   {props.rows}               
                    <br/>
                </div> }
                <div className="card-footer">
                    <RowThree />
                </div>
            </div> 
        </div>
        </>
    );
}