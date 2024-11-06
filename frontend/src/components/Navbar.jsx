import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navbar navbar-light px-5 py-3 border-bottom">
            <nav className="d-flex justify-content-between align-items-center w-100">
                <h1 className="mb-0">
                    <Link to={'/'} className="text-danger fw-bold cursor-pointer text-decoration-none">ToDo</Link>
                </h1>
                <ul className="list-unstyled d-flex gap-3 mb-0">
                    <li>
                        <Link to="/" className="fw-medium text-decoration-none link-hover">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/todo/list" className="fw-medium text-decoration-none link-hover">All Tasks</Link>
                    </li>
                    <li>
                        <Link to="/todo/list/completed" className="fw-medium text-decoration-none link-hover">Completed Tasks</Link>
                    </li>
                    <li>
                        <Link to="/todo/list/pending" className="fw-medium text-decoration-none link-hover">Pending Tasks</Link>
                    </li>
                </ul>
                <div className="d-flex gap-3">
                    <button className="btn btn-danger">Login / Sign-up</button>
                </div>
            </nav>
        </header>
    );
}