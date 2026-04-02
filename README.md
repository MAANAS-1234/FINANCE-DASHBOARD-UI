# FINANCE-DASHBOARD-UI
# Finance Dashboard

A modern and interactive **Finance Dashboard** built using **React, Tailwind CSS, and Recharts**.
This application helps users track income, expenses, and financial insights with a clean UI and role-based access.

---

## Features

### Dashboard Overview

* Displays **Total Income, Expenses, and Balance**
* Clean card-based layout
* Responsive design

### Charts & Visualization

* Pie chart showing **category-wise spending**
* Dynamic colors (light & dark mode support)

### Transactions Management

* View all transactions in a table
* Search transactions by category 
* Filter by type (Income / Expense) 

### Add & Delete Transactions

* Admin can:

  * Add new transactions
  * Delete existing transactions
* Viewer has read-only access

### Authentication (Frontend)

* Admin login with:

  * Username + Password
* Modal-based login UI

### Dark Mode

* Toggle between light and dark themes
* Fully responsive UI for both modes

### Data Persistence

* Uses **LocalStorage**
* Data remains even after refresh

---

## Admin Credentials

```
Username: admin
Password: admin123
```

---

## Tech Stack

* React (Vite)
* Tailwind CSS
* Recharts
* JavaScript (ES6)
* LocalStorage

---

## Setup Instructions

### Clone the repository

```bash
git clone <your-repo-link>
cd finance-dashboard
```

---

### Install dependencies

```bash
npm install
```

---

### Create Environment Variables

Create a `.env` file in the root directory:

```env
VITE_ADMIN_USERNAME=admin
VITE_ADMIN_PASSWORD=admin123
```

---

### Run the project

```bash
npm run dev
```

---

### Open in browser

```
http://localhost:5173/
```

---

## Approach & Design Decisions

* Used **component-based architecture** for scalability
* Managed state using React hooks (`useState`, `useEffect`)
* Implemented **role-based UI rendering**
* Used **LocalStorage** for persistence without backend
* Designed UI with **Tailwind CSS utility-first approach**
* Integrated **Recharts** for interactive data visualization
* Implemented **dark mode using Tailwind class strategy**

---

## Project Structure

```
src/
│
├── components/
│   ├── Dashboard.jsx
│   ├── TransactionList.jsx
│   ├── Charts.jsx
│   ├── Insights.jsx
│   ├── AddTransaction.jsx
│   ├── Login.jsx
│
├── data/
│   └── mockData.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Future Improvements

* Backend authentication (JWT)
* Database integration (MongoDB / Firebase)
* Multi-user support
* Edit transaction feature
* Advanced analytics (monthly trends)

---

## 👨‍💻 Author

A MAANAS

---

## Conclusion

This project demonstrates:

* Frontend development skills
* State management
* UI/UX design
* Problem-solving ability
