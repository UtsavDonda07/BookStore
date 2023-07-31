import './App.css';
import HomePage from './components/HomePage.jsx';
import BooksList from './components/BooksList';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import {GlobalStyle} from './components/GlobalStyle';

function App() {
  return (

    <div style={{ color:"green"}}>

      <BrowserRouter>
      <div className='navbar'>
        <NavLink className='navtitle' to='/' activeClassName='active'>Home</NavLink>
        <NavLink className='navtitle' to='/BookList' activeClassName='active'>BookList</NavLink>

      </div>
        <Routes>

          <Route  style={GlobalStyle.name} path='/' element={<HomePage username={'Utsav'} />}></Route>
          <Route path='/BookList' element={<BooksList />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;