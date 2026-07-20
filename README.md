# 🎓 Learn Lens

**Learn Lens** is an AI-powered student performance prediction web application developed using the **MERN Stack** and **Machine Learning**. The system predicts students' academic performance based on factors such as attendance, study hours, assignment scores, and previous grades. It helps educators identify students who may need additional academic support through data-driven insights.

---

## 📌 Project Overview

Educational institutions generate a large amount of student data, but identifying students at risk of poor academic performance can be challenging. Learn Lens addresses this problem by using a machine learning model to analyze academic data and predict future student performance.

The application provides an intuitive interface for managing student records, viewing performance analytics, and generating AI-powered predictions to support informed educational decisions.

---

## ✨ Features

- 👨‍🎓 Student Management (Add, Edit, Delete, View)
- 🤖 AI-Based Student Performance Prediction
- 📊 Dashboard with Student Statistics
- 📈 Academic Performance Tracking
- ⚠️ Early Identification of At-Risk Students
- 📄 Performance Reports
- 🔍 Search Student Records
- 📱 Responsive and User-Friendly Interface

---

## 🧠 Machine Learning

The prediction model is developed using Python and Scikit-learn.

### Input Features

- Attendance Percentage
- Study Hours
- Assignment Score
- Previous Grade

### Output

- Predicted Grade
- Performance Level
- Recommendation

The trained machine learning model analyzes student data and predicts academic performance, helping educators make proactive decisions.

---

## 🏗️ System Architecture

```text
React Frontend
        │
        ▼
Node.js + Express API
        │
        ▼
MongoDB Database
        │
        ▼
Python Machine Learning Model
        │
        ▼
Prediction Result
```

---

## 💻 Technologies Used

### Frontend
- React.js
- Tailwind CSS
- React Router
- React Icons

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- Joblib

### Tools
- Git
- GitHub
- VS Code
- Postman

---

## 📁 Project Structure

```text
Learn_Lens/
│
├── Frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── routes/
│       └── services/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── ml/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 📄 Application Pages

### 🏠 Home
Introduces Learn Lens, explains its features, and provides information about the AI-powered prediction system.

### 🔐 Login
Secure login page for users.

### 📊 Dashboard
Displays student statistics, prediction summaries, and performance insights.

### 👨‍🎓 Students
Manage student records including creating, updating, deleting, and viewing student information.

### 🤖 Prediction
Generate AI-based predictions using student academic data and view the predicted grade and performance level.

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/nadeeshanii/LearnLens.git
```

---

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

### Backend

```bash
cd backend
npm install
npm run dev
```

---

### Machine Learning

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Train the model:

```bash
python train_model.py
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

## 🔄 Application Workflow

1. User enters student information.
2. Student data is stored in MongoDB.
3. Backend sends the required data to the machine learning model.
4. The ML model predicts the student's academic performance.
5. The prediction result is displayed to the user.

---

## 🎯 Future Improvements

- Student Authentication
- Teacher Dashboard
- Data Visualization Charts
- Performance History
- PDF Report Generation
- Email Notifications
- Multiple Machine Learning Models
- Improved Prediction Accuracy

---

## 👩‍💻 Developer

**Nadeeshani Wijebandara**

Software Engineering Undergraduate | MERN Stack Developer | Odoo ERP Developer | Machine Learning Enthusiast

GitHub:
https://github.com/nadeeshanii

---

## 📜 License

This project is developed for educational and portfolio purposes.