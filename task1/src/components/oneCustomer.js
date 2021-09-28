import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'

function oneCustomer() {

let {cust_id}=useParams('cust_id');
const[customer,setcustomer]=useState({});


useEffect(()=>{

    fetch(''+cust_id,{method:'GET'})
    .then(res=>res.json)
    .then(res=>setcustomer(res))
    .catch(err=>console.log(err))
},[cust_id])


    return (
        <div>
            <p><b>{customer.name}</b></p>
            <p><b>{customer.mobile}</b></p>
            <p><b>{customer.address}</b></p>
        </div>
    )
}

export default oneCustomer;
