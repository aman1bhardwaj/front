import React,{useState,useEffect} from "react";
import { Button,Table, } from "react-bootstrap";
import { Link } from "react-router-dom";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

useEffect(()=>
  fetch('/customers/all',{method:'GET'})
  .then(res=>res.json)
  .then(res=>setCustomers(res))
  .catch(err=>console.log(err))
)

let DeleteCustomer =(cust_id)=>{
    fetch(''+cust_id,{method:'DELETE'})
    .then(res=>console.log('deleted'))
    .catch(err=>console.log(err))
}

  return (
    <div className="container">
        <td><Link to={''}><Button variant="outline-secondary">Add customer</Button></Link></td>
      <Table bordered hover responsive className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DETAILS</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
            { customers.map( (cust,i)=>
          <tr key={i}>
            <td>{i+1}</td>
            <td>{cust.name}</td>
            <td><Link to={''+cust_id}><Button variant="outline-secondary"></Button></Link></td>
            <td><Link to={''+cust_id}><Button variant="outline-secondary"></Button></Link></td>
            <td><Link to={''+cust_id}><Button variant="outline-secondary" onClick={()=>DeleteCustomer(cust_id)}></Button></Link></td>
          </tr>
            ) }
        </tbody>
      </Table>
    </div>
  );
};

export default Customers;
