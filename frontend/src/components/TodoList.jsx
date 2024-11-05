import todos from '../assets/data/todos';

export default function TodoList() {
    return (
        <div className='w-100 list-group'>
            <ul className='d-flex flex-wrap w-100 gap-2 p-0'>
                {todos.map((todo) => {
                    const { id, title, completed, createdAt } = todo;
                    return (
                        <li key={id} className={`list-group-item border ${completed ? 'list-group-item-success' : ''} py-4 d-flex justify-content-between w-25`}>
                            <div className='d-flex-column align-items-start gap-5'>
                                <div className=''>
                                    <h6 className='fw-bold'>{title}</h6>
                                    <p className='m-0'>Status: {completed ? 'Completed' : 'Not Completed'}</p>
                                    <p>Created At: {createdAt.toLocaleDateString()}</p>
                                </div>
                                <div className='d-flex gap-2'>
                                    <button className='btn btn-primary'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}