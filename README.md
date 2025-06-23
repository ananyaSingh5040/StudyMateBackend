# 🧠 StudyMateBackend

**StudyMateBackend** is the backend server for **StudyMate**, a full-stack AI-powered study planner and doubt solver built using the MERN stack.

This backend handles all planner task operations (CRUD) and integrates with GPT-powered AI to provide real-time answers to students' doubts — making self-study smoother and smarter.

---

## 🔍 Purpose

The goal of **StudyMate** is to help students:
- Organize and manage their study schedule 🗓️
- Ask doubts and get instant AI-generated explanations 🧠

---

## ⚙️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **AI API:** OpenRouter (GPT-3.5-turbo)
- **Other:** dotenv, nodemon, axios

---

## 📂 Folder Structure

```
backend/
├── controllers/
│   ├── plannerController.js    # Task CRUD logic
│   └── doubtController.js      # AI doubt solver logic
├── routes/
│   ├── plannerRoutes.js        # Task routes
│   └── doubtRoutes.js          # AI route
├── models/
│   └── Task.js                 # Task schema
├── .env
├── index.js                    # App entry point
```

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   ```
   MONGO_URI=your_mongo_connection_string
   OPENROUTER_API_KEY=your_openrouter_key
   ```

4. **Run the server**
   ```bash
   nodemon index.js
   ```

---

## 🧪 API Endpoints

### 📌 Task Planner

| Method | Route                | Description         |
|--------|----------------------|---------------------|
| GET    | `/api/planner`       | Get all tasks       |
| POST   | `/api/planner`       | Create a new task   |
| PUT    | `/api/planner/:id`   | Update a task       |
| DELETE | `/api/planner/:id`   | Delete a task       |

**Task Schema Example**
```json
{
  "title": "Finish DSA Sheet",
  "date": "2025-06-22",
  "completed": false
}
```

---

### 💬 AI Doubt Solver

| Method | Route         | Description                        |
|--------|--------------|------------------------------------|
| POST   | `/api/doubt` | Ask any academic doubt to the AI   |

**Request Body Example:**
```json
{
  "question": "What is memoization in dynamic programming?"
}
```

**Response Example:**
```json
{
  "answer": "Memoization is a technique where we store the result of expensive function calls..."
}
```

---

## 📦 Main Dependencies

- express
- mongoose
- axios
- dotenv
- nodemon

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)

---