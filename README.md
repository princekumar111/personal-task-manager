# Personal Task Manager

## 📌 Project Description

Personal Task Manager is a full-stack task management web application built as part of the Studio Graphene take-home exercise.

The application allows a user to create, manage, and organize personal tasks. Users can add tasks with title, description, and due date, update task details, mark tasks as completed or active, delete tasks, and filter tasks based on their status.

No authentication is required. The application assumes a single user.

---

## 🚀 Live Demo Links

Frontend:

Add your deployed frontend URL here


Backend:

Add your deployed backend URL here


---

## 🛠 Tech Stack

### Frontend
- React.js
- JavaScript
- React Hooks
- CSS / Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- REST API

### Storage
- JSON File / In-memory storage

### Tools
- Git & GitHub
- VS Code
- Postman (API Testing)

---

## ✨ Features

### Completed Features

- Create a new task
- Add title, description, and due date
- View all tasks
- Tasks sorted by newest first
- Edit task information
- Delete task with confirmation
- Mark task as complete/incomplete
- Filter tasks:
  - All Tasks
  - Active Tasks
  - Completed Tasks

### Extra Features

- Active and completed task count
- Overdue task indication
- Empty task message
- Responsive UI

---

# ⚙️ How to Run Locally

## 1. Clone Repository

```bash
git clone your-github-repository-link
cd Personal-Task-Manager
Backend Setup

Navigate to server folder:

cd server

Install dependencies:

npm install

Start backend:

npm start

Backend runs on:

http://localhost:5000
Frontend Setup

Open another terminal:

cd client

Install dependencies:

npm install

Run React app:

npm run dev

Frontend runs on:

http://localhost:5173
📡 API Documentation
Get All Tasks
Request
GET /api/tasks
Response
[
  {
    "id": 1,
    "title": "Complete Assignment",
    "description": "Finish task manager project",
    "dueDate": "2026-06-05",
    "completed": false,
    "createdAt": "2026-06-03"
  }
]
Create Task
Request
POST /api/tasks

Body:

{
  "title": "Learn React",
  "description": "Practice hooks",
  "dueDate": "2026-06-10"
}
Response
{
  "message": "Task created successfully"
}
Update Task
Request
PUT /api/tasks/:id

Body:

{
  "title": "Updated Task",
  "description": "Updated details",
  "dueDate": "2026-06-12"
}
Response
{
  "message": "Task updated successfully"
}
Toggle Complete Status
Request
PATCH /api/tasks/:id/status

Body:

{
  "completed": true
}
Response
{
  "message": "Task status updated"
}
Delete Task
Request
DELETE /api/tasks/:id
Response
{
  "message": "Task deleted successfully"
}
📂 Project Structure
Personal-Task-Manager/

│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│

├── server/
│   ├── routes/
│   ├── controllers/
│   ├── data/
│   ├── server.js
│   └── package.json

│
├── README.md
└── .gitignore
🔮 Next Steps / Future Improvements

Features I would improve with more time:

Add user authentication
Add database support using MongoDB/PostgreSQL
Add drag-and-drop task ordering
Add task priority levels
Add notifications for upcoming due dates
Add automated testing
AI Usage Note

AI tools were used for guidance and improving productivity.
All code was reviewed and understood before submission.

Author

Prince Kuma
