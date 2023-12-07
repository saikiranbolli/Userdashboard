import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import DeleteUser from './components/DeleteUser';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/home' element={<MainPage/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/delete' element={<DeleteUser/>}></Route>
        <Route path='/update/:id' element={<EditUser/>}></Route>
        <Route path='/view/:id' element={<ViewUser/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
