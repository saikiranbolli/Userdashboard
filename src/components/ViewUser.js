import {React,useEffect, useState} from 'react'
import {Container ,Table} from 'react-bootstrap';
import { Pen } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import User from './User';

const ViewUser = () => {
  // const [Id, setId] = useState("");
  const { id: userId } = useParams(); // Extract id from the URL
  console.log(Number(userId))
  // useEffect(() => {
  //   // Get the current URL
  //   const currentURL = window.location.href;
  //   const get_url = currentURL.split("/view");


  return (
   <>
    <Container>
    <div className='mx-md-5'>
    <div className='d-flex pt-5 align-items-center mb-4'>
        <Link to="/" className=''><ArrowLeft className='text-dark me-3 shadow rounded-5 p-2' size={35}/></Link>
        <h3 className='fw-bold mb-0'>User Details</h3>
            </div>
            <div className='reponsive_table'>
                <Table striped bordered hover>
                    <thead className='bg-body-secondary'>
                        <tr>
                            <td className='fw-bold'>No</td>
                            <td className='fw-bold'>Name</td>
                            <td className='fw-bold'>Email</td>
                            <td className='fw-bold'>Role</td>
                            <td className='text-center fw-bold'>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        User.map((ele,index) => {
                          if(ele.id === parseInt(userId)){
                            return(
                              <tr>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.role}</td>
                                <td className='text-center'>
                                <Link to={`/update/${ele.id}`} className='btn btn-success'><Pen/></Link>
                                </td>
                              </tr>
                            );
                          }
                          else return <></>;
                        })
                      }
                    </tbody>
                </Table>
            </div>
        </div>
    </Container>
   </>
  )
}

export default ViewUser