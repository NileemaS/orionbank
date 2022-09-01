import React from "react";
import { UserContext } from '../App.js';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, {Type} from "react-bootstrap-table2-editor";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import { Button } from "react-bootstrap";
import '../assets/tData.css';
import Tooltip from "./Tooltip";


export default function DataTable () {
    const getValues = React.useContext(UserContext);  
     
    function formatName(data, row) {
      return (<> Active: {data} </>);
    }

    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      clickToEdit: true,
      //selected: [1, 3],
      style: { backgroundColor: '#c8e6c9' }
    }
  
    const columns = [{
      dataField:"name",
      text: "Name",
      sort: true,
      formatter: formatName,
      filter: textFilter(),
      /* validator: (newValue, row, column)=> {
         if (isNaN(newValue)){
          return {
            valid: false,
            message: "Please enter numeric value"
          }
         }
        return true
      }*/
    },{
      dataField:"email",
      text: "Email",
      sort: true,
    },{
      dataField:"password",
      text: "Password",
      sort: true,
    },{
      dataField:"balance",
      text: "Balance",
      sort: true,
      editable: false,
      filter: textFilter(),
    },{
      dataField: "dropdown",
      text: "Dropdown",
      editor: {
        type: Type.SELECT,
        options: [
          { value: "A",
            label: "A"
          },
          { value: "B",
            label: "B"
          },
          { value: "C",
          label: "C"
          },
          { value: "D",
          label: "D"
          }
        ]
      }
    }
  ]

    return (
        <>
        <div className="tableBdy">
        <BootstrapTable keyField="password"
        data={getValues.users} columns={columns} 
        striped hover condensed
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({mode:"dbclick",
                                  blurToSave: true,
                                  nonEditableRows: ()=> [1, 2] })}
        selectRow={selectRow}
        filter={filterFactory()}
        />
        <Tooltip content="Select Rows to Print" direction="right">
          <Button className='print-button' >
            <span className="print-icon"></span>
          </Button>
        </Tooltip>
        </div>
        </>
    )
}

// Documentation //
// Called from: 'AllData'
// Components: BootstrapTable, Tooltip
// useContext for getting 'Name','Email,'Password','Balance' to display
// Description: DataTable displays all data in tabular form using 'BootstrapTable' which
//     allows to sort, filter, edit and selectRow 
// Toltip is a React component used to display text for 'Print' button
// 
// - X - O - X - //