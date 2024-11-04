export default function Navbar() {
    return (
        <header className="navbar navbar-light px-5 py-3 border-bottom">
            <nav className="d-flex justify-content-between align-items-center w-100">
                <h1 className="mb-0">
                    <span className="text-danger fw-bold cursor-pointer">ToDo</span>
                </h1>
                <ul className="list-unstyled d-flex gap-3 mb-0">
                    <li><a href="#" className="fw-medium text-decoration-none link-hover">All Tasks</a></li>
                    <li><a href="#" className="fw-medium text-decoration-none link-hover">Pending Tasks</a></li>
                    <li><a href="#" className="fw-medium text-decoration-none link-hover">Completed Tasks</a></li>
                </ul>
                <div className="d-flex gap-3">
                    <button className="btn btn-danger">Log in</button>
                    <button className="btn btn-danger">Sign up</button>
                </div>
            </nav>
        </header>
    );
}
