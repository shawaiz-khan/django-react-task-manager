export default function Footer() {
    return (
        <footer className="bg-light text-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="text-uppercase fw-bold">ToDo App</h5>
                        <p className="text-muted">
                            Your personal task manager. Organize and prioritize with ease.
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-3 mb-4">
                        <h6 className="text-uppercase fw-bold">Links</h6>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/about" className="text-dark text-decoration-none">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/features" className="text-dark text-decoration-none">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-dark text-decoration-none">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <h6 className="text-uppercase fw-bold">Contact Us</h6>
                        <p className="mb-1">
                            <strong>Email:</strong>{" "}
                            <a href="mailto:shawaizkhan.biz@gmail.com" className="text-dark text-decoration-none">
                                shawaizkhan.biz@gmail.com
                            </a>
                        </p>
                        <p className="mb-1">
                            <strong>Phone:</strong> +92 328 852 8854
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <small className="text-muted">
                            &copy; {new Date().getFullYear()} ToDo App. All rights reserved.
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}