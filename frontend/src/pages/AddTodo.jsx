export default function AddTodo() {
    const handleDate = (e) => {
        e.preventDefault();
        const defaultDate = new Date().toLocaleDateString()
        console.log(defaultDate)
    }

    return (
        <div className="bg-white d-flex-column justify-content-center align-content-center m-auto">
            <h1>Add Todo</h1>
            <form action="#" className="d-flex-column w-75">
                <div className="d-flex gap-3">
                    <input
                        type="text"
                        placeholder='Enter title...'
                        className='form-control rounded border border-secondary shadow-sm p-2'
                    />
                    <input
                        type="text"
                        placeholder='Enter deadline...'
                        className='form-control rounded border border-secondary shadow-sm p-2'
                    />
                </div>
                <div className="d-flex gap-2">
                    <label htmlFor="checkbox">Already Completed?</label>
                    <input type="checkbox" className="form-check-input border-secondary" />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleDate}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
