import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllTodo from './pages/AllTodo';
import AddTodo from './pages/AddTodo';
import Completed from './pages/Completed';
import Pending from './pages/Pending'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo/list' element={<AllTodo />} />
        <Route path='/todo/list/completed' element={<Completed />} />
        <Route path='/todo/list/pending' element={<Pending />} />
        <Route path='/add' element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;