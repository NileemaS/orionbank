
const MsgSuccessDisplay = (props)=> {
return (
<>
{props.sendMsg == "Deposit" ? 
    <>
      <h3> $ {props.amount} is deposited successfully !! <br/></h3>   
   </>
   : ( props.sendMsg == "Withdraw" ?
   <>
      <h3> Withdraw $ {props.amount} successfully !!  </h3>       
    </> 
    : "" )
}
</>
)
}
export default MsgSuccessDisplay ;