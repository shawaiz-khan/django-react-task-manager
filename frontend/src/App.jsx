import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllTodo from './pages/AllTodo';
import AddTodo from './pages/AddTodo';
import Completed from './pages/Completed';
import Error from './pages/Error';
import Pending from './pages/Pending';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Home />} />
        <Route path='/todo/list' element={<AllTodo />} />
        <Route path='/todo/list/completed' element={<Completed />} />
        <Route path='/todo/list/pending' element={<Pending />} />
        <Route path='/todo/list/add' element={<AddTodo />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;