import todos from '../assets/data/todos';

export default function TodoList() {
    return (
        <div>
            <ul className='list-group'>
                {todos.map((todo) => {
                    const { id, title, completed, createdAt } = todo;
                    return (
                        <li key={id} className={`list-group-item ${completed ? 'list-group-item-success' : ''} py-4 d-flex justify-content-between`}>
                            <div className='d-flex-column justify-content-between align-items-start gap-5'>
                                <h4>{title}</h4>
                                <p>Status: {completed ? 'Completed' : 'Not Completed'}</p>
                                <div className='d-flex gap-2'>
                                    <button className='btn btn-primary'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </div>
                            </div>
                            <p>Created At: {createdAt.toLocaleDateString()}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}