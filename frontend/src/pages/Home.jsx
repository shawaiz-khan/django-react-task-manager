/* eslint-disable react/prop-types */
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
                <Link to="/todo/list" aria-label="Navigate to task manager">
                    <button className="btn btn-danger btn-lg mt-3 px-4">Start Managing Tasks</button>
                </Link>
            </div>

            <section className="py-5 bg-body-tertiary">
                <div className="container text-center">
                    <h2 className="mb-5 fw-bold">Features</h2>
                    <div className="row g-4">
                        <FeatureCard
                            title="Easy Task Management"
                            description="Quickly add, edit, and delete tasks to stay organized."
                        />
                        <FeatureCard
                            title="Prioritize Your Tasks"
                            description="Mark tasks as high priority and focus on what matters most."
                        />
                        <FeatureCard
                            title="Track Your Progress"
                            description="Complete tasks and see your progress grow daily."
                        />
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-5 fw-bold">How It Works</h2>
                    <div className="row g-4">
                        <StepCard step="Step 1" description="Add your tasks with deadlines." />
                        <StepCard step="Step 2" description="Organize your tasks into categories." />
                        <StepCard step="Step 3" description="Mark tasks as completed." />
                    </div>
                </div>
            </section>

            <section className="py-5 bg-danger text-white text-center">
                <div className="container">
                    <h2 className="mb-3 fw-bold">Ready to Get Started?</h2>
                    <p>Sign up now and take control of your day!</p>
                    <Link to="/" aria-label="Sign up for free">
                        <button className="btn btn-light px-4">Sign Up for Free</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Home;

function FeatureCard({ title, description }) {
    return (
        <div className="col-md-4">
            <div className="h-100 p-4 border rounded shadow-sm bg-white">
                <h4 className="fw-semibold text-danger">{title}</h4>
                <p className="text-muted">{description}</p>
            </div>
        </div>
    );
}

function StepCard({ step, description }) {
    return (
        <div className="col-md-4">
            <div className="h-100 p-4 bg-white rounded shadow-sm">
                <h5>{step}</h5>
                <p className="text-muted m-0">{description}</p>
            </div>
        </div>
    );
}
