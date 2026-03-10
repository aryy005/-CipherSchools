# CipherSQL Studio

CipherSQL Studio is a full-stack web application that allows users to **practice SQL queries interactively**.
Users can view SQL assignments, write queries in an editor, execute them against a PostgreSQL database, and view the results instantly.
The platform also integrates an AI hint system to guide users when they get stuck.

---

## 🚀 Features

* Interactive SQL query editor
* Execute SQL queries and view results in real time
* SQL practice assignments stored in MongoDB
* PostgreSQL database for query execution
* AI-powered hint generator
* Sample dataset viewer
* Clean and responsive user interface

---

## 🏗️ Project Architecture

```
Frontend (React + Vite)
        |
        | API Requests
        ↓
Backend (Node.js + Express)
        |
        ├── MongoDB (Stores SQL assignments)
        |
        └── PostgreSQL (Executes user SQL queries)
```

---

## 📁 Project Structure

```
ciphersqlstudio
│
├── backend
│   ├── db
│   │   ├── mongo.js
│   │   └── postgres.js
│   │
│   ├── routes
│   │   ├── assignments.js
│   │   ├── query.js
│   │   └── hint.js
│   │
│   ├── models
│   │   └── Assignment.js
│   │
│   ├── dataset
│   │   └── dataset.json
│   │
│   ├── server.js
│   └── .env
│
└── frontend
    ├── src
    │   ├── components
    │   │   ├── SqlEditor.jsx
    │   │   ├── ResultTable.jsx
    │   │   └── SampleDataViewer.jsx
    │   │
    │   ├── pages
    │   │   ├── AssignmentList.jsx
    │   │   └── AssignmentAttempt.jsx
    │   │
    │   ├── styles
    │   │   ├── main.scss
    │   │   └── variables.scss
    │   │
    │   ├── api.js
    │   └── App.jsx
    │
    ├── vite.config.js
    └── package.json
```

---

## ⚙️ Technologies Used

### Frontend

* React
* Vite
* SCSS
* Axios
* Monaco Editor

### Backend

* Node.js
* Express.js

### Databases

* MongoDB Atlas (Assignments storage)
* PostgreSQL (SQL query execution)

### AI Integration

* OpenAI API (for SQL hints)

---

## 🔧 Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/yourusername/ciphersqlstudio.git
cd ciphersqlstudio
```

---

### 2. Backend Setup

Navigate to the backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
POSTGRES_URI=postgresql://postgres:password@localhost:5432/ciphersql
OPENAI_API_KEY=your_openai_api_key
```

Start the backend server:

```
node server.js
```

Server will run at:

```
http://localhost:5000
```

---

### 3. Frontend Setup

Open a new terminal and navigate to frontend:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🗄️ PostgreSQL Setup

1. Install PostgreSQL
2. Open pgAdmin
3. Create a database named:

```
ciphersql
```

Example table for practice:

```
CREATE TABLE employees (
 id INTEGER,
 name TEXT,
 salary INTEGER,
 department TEXT
);

INSERT INTO employees VALUES
(1,'Alice',45000,'HR'),
(2,'Bob',60000,'Engineering'),
(3,'Charlie',75000,'Engineering'),
(4,'Diana',48000,'Sales');
```

---

## 📦 MongoDB Setup

1. Create a cluster on MongoDB Atlas
2. Create a database user
3. Allow network access (0.0.0.0/0)
4. Copy the connection string and add it to `.env`

---

## 💡 Usage

1. Open the application in the browser
2. Select an SQL assignment
3. Write a query in the SQL editor
4. Execute the query
5. View results instantly
6. Use AI hints if needed

---

## 🧪 Future Improvements

* User authentication system
* Leaderboard for challenges
* Query execution sandbox
* Query history tracking
* Advanced SQL challenges

---

## 👨‍💻 Author

Aryan Malik

---
