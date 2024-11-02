# Django React Task Manager

## Description
This project is a full-stack Task Manager application built using Django for the backend and React for the frontend. It allows users to manage their tasks efficiently by providing functionality to create, read, update, and delete tasks. The application is designed to be user-friendly and responsive.

## Features
- Create new tasks
- View all tasks with their statuses
- Edit existing tasks
- Delete tasks
- Simple and intuitive user interface

## Tech Stack
- **Frontend**: React
- **Backend**: Django
- **Database**: SQLite (for storing tasks)

## Getting Started

### Prerequisites
- Python 3.x
- Node.js and npm
- Django

### Installation

#### Backend (Django)
1. Clone the repository:
   ```bash
   git clone https://github.com/shawaiz-khan/django-react-task-manager.git
   cd django-react-task-manager/backend
   ```
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

#### Frontend (React)
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## Usage
- Navigate to `http://localhost:3000` in your web browser to access the React frontend.
- Use the interface to manage your tasks.

## Contributing
Contributions are welcome! If you have suggestions for improvements or features, feel free to create an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspired by the need for effective task management.
- Thanks to the open-source community for providing great resources and tools.
```