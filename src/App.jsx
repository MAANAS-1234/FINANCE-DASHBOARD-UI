import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import Charts from "./components/Charts";
import Insights from "./components/Insights";
import AddTransaction from "./components/AddTransaction";
import Login from "./components/Login";
import { transactions as initialData } from "./data/mockData";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const handleRoleChange = (value) => {
    if (value === "admin") {
      setShowLogin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    setShowLogin(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen p-6">

      <button
        className="border px-4 py-2 mb-4"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode " : "Dark Mode "}
      </button>

      <h1 className="text-3xl font-bold mb-4">
        Finance Dashboard
      </h1>

      <select
        className="border p-2 mb-2 text-black dark:bg-gray-800 dark:text-white"
        onChange={(e) => handleRoleChange(e.target.value)}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <p className="mb-4">
        Current Role: {isAdmin ? "Admin " : "Viewer "}
      </p>

      <Dashboard data={transactions} />
      <Charts data={transactions} />
      <Insights data={transactions} />
      {isAdmin && (
        <AddTransaction addTransaction={addTransaction} />
      )}

      <TransactionList
        data={transactions}
        role={isAdmin ? "admin" : "viewer"}
        deleteTransaction={deleteTransaction}
      />

      {showLogin && (
        <Login
          onLogin={handleLoginSuccess}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
}

export default App;