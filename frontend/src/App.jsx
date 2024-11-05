import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <main className='min-vh-100 bg-light p-5'>
      <div className='d-flex flex-column align-items-center mb-5'>
        <div className='w-100 d-flex justify-content-center align-items-center'>
          <div className='d-flex justify-content-center w-75'>
            <input
              type="text"
              placeholder='Search for tasks...'
              className='form-control rounded border border-secondary shadow-sm p-2'
            />
            <button className='btn btn-primary ms-2 w-25'>Search</button>
            <button className='btn btn-danger ms-2 w-25'>Add Tasks</button>
          </div>
        </div>
      </div>
      <TodoList />
    </main>
  );
}

export default App;