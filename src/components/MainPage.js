import {React,useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container ,Table,Button,Pagination} from 'react-bootstrap';
import CreateUser from './CreateUser';
import DeleteUser from './DeleteUser';
import { Eye, Trash,Pen } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { UserStore } from '../Zustand/Store';

const pageSize = 10;
const MainPage = () => {
    const User = UserStore(state => state.user);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [itemid, setitemid] = useState();
    const [itemname, setitemname] = useState();
    const [Data,setDate] = useState(User);

    const handleShow = (e,id,name) => {
        setitemid(id);
        setitemname(name)
        // Data = Data.filter(obj => obj.id !== id);
        // console.log(Data);
        setShowModal(true)
    };

    useEffect(() => {
        setDate(User);
      
    }, [User])
    


    const handleClose = () => setShowModal(false);

    const totalPages = Math.ceil(Data.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, Data.length);
    // const currentData = Data.slice(startIndex, endIndex);
        const currentData = Data.slice(startIndex, endIndex);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

  return (
    <>
    <Container>
        <div className='mx-md-5'>
            <div className='d-flex justify-content-between py-md-5 py-3 '>
                <div>
                    <h3 className='fw-bold'>User List</h3>
                </div>
                <div>
                    <Link to="/create" className='btn btn-primary'>Create</Link>
                </div>
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
                        currentData.map((ele,id) => {
                            return (
                                
                                <tr key={startIndex + id} className='' item_id={id}>
                                    <td>{currentData[id].id}</td>
                                    <td>{currentData[id].name}</td>
                                    <td>{currentData[id].email}</td>
                                    <td>{currentData[id].role}</td>
                                    <td>
                                        <tr className='d-flex gap-1 justify-content-center'>
                                            <td>
                                                <div className='text-dark px-1'>
                                                <Link to={`/view/${parseInt(currentData[id].id)}`}><Eye/></Link>
                                                </div>
                                            </td>
                                            {/* <td>
                                                <div className='text-success px-1'>
                                                   <Pen/>
                                                </div>
                                            </td> */}
                                            <td>
                                                <Button onClick={(e) => handleShow(e,currentData[id].id,currentData[id].name)} className='text-danger bg-transparent px-1 py-0 border-0' id={currentData[id].id}><Trash/></Button>
                                            </td>
                                        </tr>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                    </tbody>
                </Table>
                <DeleteUser showModal={showModal} handleClose={handleClose} title="Deleting User" item="Delete" id={itemid} name={itemname}/>
                <div className="d-flex justify-content-end">
                <Pagination>
        {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
            </Pagination.Item>
        ))}
    </Pagination>
                </div>
            </div>
        </div>
    </Container>
   
       
    </>
  )
}

export default MainPage