import React from 'react'
import { useParams } from 'react-router';

function updateCustomer() {
    let {cust_id}=useParams('cust_id')
    const [oldcustomer, setoldcustomer] = useState({});

    useEffect(() => {
        fetch(''+cust_id,{method:'GET'})
        .then(res=>res.json)
        .then(res=>setoldcustomer(res))
        .catch(err=>console.log(err))
    }, [cust_id])

    const submitHandler=(values)=>{

        fetch('',{method:'PUT',body:JSON.stringify(oldcustomer)})
        .then(res=>res.json)
        .then=(res=>setcustomer(res))
        .catch(err=>console.log(err))
    }

    return (
        <div className="container">
        <Formik  onSubmit={submitHandler}>
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
    )
}

export default updateCustomer;
