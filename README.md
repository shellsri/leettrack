# 🚀 LeetTrack – LeetCode Progress Tracker

LeetTrack is a personal **LeetCode problem tracking dashboard** that helps developers monitor their coding journey, analyze progress, and stay consistent with DSA practice.

It is designed to feel like a **real-world project**, not just a practice app.

---

## 📌 Features

* 📊 **Dashboard Overview**

  * Total problems solved
  * Easy / Medium / Hard breakdown
* 📝 **Problem Management**

  * Add solved problems
  * Track difficulty, topic, and status
* 📈 **Analytics Page**

  * Visual insights into progress
  * Identify weak & strong areas
* 💾 **Persistent Data**

  * Problems are saved and not lost on refresh
* 🎯 **Beginner-friendly UI**

  * Clean and minimal interface
  * Focused on usability

---

## 🛠 Tech Stack

**Frontend**

* React.js
* React Router
* CSS (custom styling)

**State Management**

* React Hooks (`useState`, `useEffect`)

**Storage**

* LocalStorage (for persistence)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Problems.jsx
│   ├── Analytics.jsx
│
├── css/
│   ├── index.css
│   ├── Header.css
│   ├── Card.css
│
├── App.jsx
├── main.jsx
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/leetrack.git

# Go into project directory
cd leetrack

# Install dependencies
npm install

# Start development server
npm run dev
```

App runs at:

```
http://localhost:5173/
```

---

## 🧠 How It Works

* Users add problems they solve
* Data is stored in **localStorage**
* Dashboard & Analytics read from stored data
* React Router handles page navigation smoothly

---

## 📈 Future Enhancements

* 🔐 User authentication
* ☁️ Backend with Node.js + MongoDB
* 🧠 AI-based insights (weekly analysis & suggestions)
* 📱 Mobile-first responsive design
* 🌍 Cloud deployment

---

## 🎯 Motivation

Tracking LeetCode manually is messy.
LeetTrack solves this by providing **structure, clarity, and motivation** for consistent DSA practice.

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit a PR.

---

## 📄 License

This project is licensed under the **MIT License**.

---

