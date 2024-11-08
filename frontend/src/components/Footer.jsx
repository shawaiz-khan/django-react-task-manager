export default function Footer() {
    return (
        <footer className="bg-light text-dark py-4">
            <div className="container text-center text-md-start">
                <div className="row">
                    {/* Branding Section */}
                    <div className="col-md-4 mb-3 w-25">
                        <h5 className="fw-bold">ToDo App</h5>
                        <p className="text-muted">
                            Simplify your life with a powerful and intuitive task management tool.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/about" className="text-dark text-decoration-none">About Us</a>
                            </li>
                            <li>
                                <a href="/features" className="text-dark text-decoration-none">Features</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-dark text-decoration-none">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-4">
                        <h5 className="fw-bold">Contact</h5>
                        <p className="text-muted mb-1">
                            Email: <a href="mailto:shawaizkhan.biz@gmail.com" className="text-dark text-decoration-none">shawaizkhan.biz@gmail.com</a>
                        </p>
                        <p className="text-muted mb-1">Phone: +92 328 852 8854</p>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-4">
                    <small className="text-muted">
                        © {new Date().getFullYear()} ToDo App. All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
}