const Dashboard = ({ data }) => {
  // Calculate values
  const income = data
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = data
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      
      {/* Income Card */}
      <div className="bg-green-100 dark:bg-green-800 p-4 rounded shadow text-black dark:text-white">
        <h3 className="text-lg font-semibold">Income</h3>
        <p className="text-2xl font-bold text-green-600 dark:text-green-300">
          ₹{income}
        </p>
      </div>

      {/* Expenses Card */}
      <div className="bg-red-100 dark:bg-red-800 p-4 rounded shadow text-black dark:text-white">
        <h3 className="text-lg font-semibold">Expenses</h3>
        <p className="text-2xl font-bold text-red-600 dark:text-red-300">
          ₹{expenses}
        </p>
      </div>

      {/* Balance Card */}
      <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded shadow text-black dark:text-white">
        <h3 className="text-lg font-semibold">Balance</h3>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">
          ₹{balance}
        </p>
      </div>

    </div>
  );
};

export default Dashboard;