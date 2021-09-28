import React,{useState} from "react";
import {Formik,Form,Field} from 'formik';
import {Button} from 'react-bootstrap';

function AddCustomer() {
  const [customer, setcustomer] = useState('');

  let cust={
    name:'',
    address:'',
    mobile:''
   }

   const submitHandler=(values)=>{

    fetch('/customers/add',{method:'POST',body:JSON.stringify(values)})
    .then(res=>res.json)
    .then=(res=>setcustomer(res))
    .catch(err=>console.log(err))
   }

  return (
    <div className="container">
      <Formik initialValues={cust} onSubmit={submitHandler}>
        <Form>
          <div className="form-group">
            <label>
              <small>NAME</small>
            </label>
            <Field className="form-control" type="text" name="name" />
          </div>
          <div>
          <label>
              <small>ADDRESS</small>
            </label>
            <Field className="form-control" type="text" name="address" />
          </div>
          <div>
          <label>
              <small>MOBILE</small>
            </label>
            <Field className="form-control" type="text" name="mobile" />
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddCustomer;
