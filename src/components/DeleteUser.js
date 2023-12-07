import React, { useState } from 'react'
import { Modal,Button } from 'react-bootstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { UserStore } from '../Zustand/Store';


const DeleteUser = ({showModal, handleClose, title,id,name}) => {

  let User = UserStore(state => state.user);
  const setUser = UserStore(state => state.setUser);
// Inside DeleteUser component
const handleSubmit = () => {
 
  const newUser = User.filter(user => user.id !== id);
  setUser([...newUser]);
  handleClose();

  
};


  return (
    <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik  onReset={handleClose}>
              <Form>
              <div className='mb-2'>
                <label htmlFor="name" className='pb-2'>Are You Sure to Delete?</label>
                <Field type="text" id="name" name="name" className="form-control" value={name}/>
                <ErrorMessage name="name" component="div" className="error text-danger" />
              </div>
                <div className="text-end pt-3">
                  <Button variant="primary" onClick={handleSubmit} className="px-3">
                    Yes
                  </Button>
                </div>
              </Form>
            </Formik>
          </Modal.Body>
        </Modal>
  )
}

export default DeleteUser