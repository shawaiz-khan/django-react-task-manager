import './App.css';

function App() {
  return (
    <main className='min-vh-100 bg-light d-flex justify-content-center align-items-start p-5'>
      <div className='w-100 d-flex justify-content-between align-items-center'>
        <h1 className='text-center m-0 fs-3'>All Tasks</h1>
        <div className='d-flex justify-content-center w-50'>
          <input
            type="text"
            placeholder='Search for tasks...'
            className='w-75 rounded border border-danger shadow-sm focus-ring p-2'
          />
          <button className='btn btn-danger ms-2'>Search</button>
        </div>
      </div>
    </main>
  );
}

export default App;