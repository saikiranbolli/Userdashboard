import React, { useState } from 'react'
import { Button, Container ,Row ,Col} from 'react-bootstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import{ ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserStore } from '../Zustand/Store';
const CreateUser = ({showModal, handleClose, title, onSave, item, onSubmitSuccess,Content}) => {
  let User = UserStore(state => state.user);
  let addUser = UserStore(state => state.setUser);
  const validate = (values) => {
    const errors = {};

    // Validate the 'name' field
    if (!values.name) {
      errors.name = 'Name is required';
    }

    // Validate the 'email' field
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // Validate the 'role' field
    if (!values.role) {
      errors.role = 'Role is required';
    }

    return errors;
  };

  const initialValues = {
    name: '',
    email: '',
    role: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const user_len = User.length;
    const get_user = { ...values, id: user_len+1 };
    const combineddata = [get_user,...User];
    addUser(combineddata);
    toast.success("User Created Successfully");
    values.email = "";
    values.name = "";
    values.role = "";
    resetForm();
  };

  return (
    <>
    <ToastContainer />
    <Container>
      <Row className='justify-content-center'>
        <Col lg={5}>
        <div className='d-flex pt-5 align-items-center mb-4'>
        <Link to="/" className=''><ArrowLeft className='text-dark me-3 shadow rounded-5 p-2' size={35}/></Link>
        <h3 className='fw-bold mb-0'>New User</h3>
      </div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} onReset={() => handleClose()} validate={validate} >
              <Form className='shadow p-5'>
              <div className='mb-2'>
                <label htmlFor="name" className='pb-2'>Name<span className='text-danger'>*</span></label>
                <Field type="text" id="name" name="name" className="form-control"/>
                <ErrorMessage name="name" component="div" className="error text-danger" />
              </div>

              <div className='mb-2'>
                <label htmlFor="email" className='pb-2'>Email<span className='text-danger'>*</span></label>
                <Field type="email" id="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="error text-danger" />
              </div>

              <div className='mb-2'>
                <label htmlFor="role" className='pb-2'>Role<span className='text-danger'>*</span></label>
                <Field as="select" id="role" name="role" className="form-select">
                  <option value="" label="Select a role" />
                  <option value="admin" label="Admin" />
                  <option value="user" label="User" />
                </Field>
                <ErrorMessage name="role" component="div" className="error text-danger" />
              </div>
                <div className="text-end pt-3">
                  <Button variant="primary" type="submit" className="px-3">
                    Save
                  </Button>
                </div>
              </Form>
            </Formik>
        </Col>
      </Row>
          
    </Container>
    </>
  );
};

export default CreateUser