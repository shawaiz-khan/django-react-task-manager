import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function Error() {
    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-body-secondary text-center">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <p className="fs-4 text-dark">Oops! The page you're looking for doesn't exist.</p>
            <Link to={'/'}><button className="btn btn-danger mt-2">Go Back Home</button></Link>
        </div>
    );
}