import { Link } from "react-router-dom";

function Home() {
    return (
        <main>
            <div className="h-100 bg-body-secondary text-dark p-5 d-flex flex-column justify-content-center align-items-center text-center">
                <h1 className="display-4 fw-bold">Organize Your Day</h1>
                <p className="lead w-75 mx-auto">
                    Stay productive and never miss a task again. Our ToDo List app helps you plan, organize,
                    and achieve your goals effortlessly.
                </p>
                <Link to="/todo/list">
                    <button className="btn btn-danger btn-lg mt-3 px-4">Start Managing Tasks</button>
                </Link>
            </div>

            <section className="py-5 bg-body-tertiary">
                <div className="container text-center">
                    <h2 className="mb-5 fw-bold">Features</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="h-100 p-4 border rounded shadow-sm bg-white">
                                <h4 className="fw-semibold text-danger">Easy Task Management</h4>
                                <p className="text-muted">Quickly add, edit, and delete tasks to stay organized.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="h-100 p-4 border rounded shadow-sm bg-white">
                                <h4 className="fw-semibold text-danger">Prioritize Your Tasks</h4>
                                <p className="text-muted">Mark tasks as high priority and focus on what matters most.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="h-100 p-4 border rounded shadow-sm bg-white">
                                <h4 className="fw-semibold text-danger">Track Your Progress</h4>
                                <p className="text-muted">Complete tasks and see your progress grow daily.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-5 fw-bold">How It Works</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="h-100 p-4 bg-white rounded shadow-sm">
                                <h5>Step 1</h5>
                                <p className="text-muted m-0">Add your tasks with deadlines.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="h-100 p-4 bg-white rounded shadow-sm">
                                <h5>Step 2</h5>
                                <p className="text-muted m-0">Organize your tasks into categories.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="h-100 p-4 bg-white rounded shadow-sm">
                                <h5>Step 3</h5>
                                <p className="text-muted m-0">Mark tasks as completed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-danger text-white text-center">
                <div className="container">
                    <h2 className="mb-3 fw-bold">Ready to Get Started?</h2>
                    <p>Sign up now and take control of your day!</p>
                    <Link to="/">
                        <button className="btn btn-light px-4">Sign Up for Free</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Home;