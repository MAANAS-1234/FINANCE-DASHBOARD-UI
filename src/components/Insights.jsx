const Insights = ({ data }) => {
  // Total expenses
  const totalExpense = data
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  // Total transactions
  const totalTransactions = data.length;

  // Find highest spending category
  const categoryMap = {};

  data.forEach((t) => {
    if (t.type === "expense") {
      if (!categoryMap[t.category]) {
        categoryMap[t.category] = 0;
      }
      categoryMap[t.category] += t.amount;
    }
  });

  let topCategory = "N/A";
  let maxAmount = 0;

  for (let key in categoryMap) {
    if (categoryMap[key] > maxAmount) {
      maxAmount = categoryMap[key];
      topCategory = key;
    }
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* Total Expenses */}
      <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded shadow text-black dark:text-white">
        <h3 className="font-semibold">Total Expenses</h3>
        <p className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
          ₹{totalExpense}
        </p>
      </div>

      {/* Total Transactions */}
      <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded shadow text-black dark:text-white">
        <h3 className="font-semibold">Transactions</h3>
        <p className="text-xl font-bold text-purple-700 dark:text-purple-300">
          {totalTransactions}
        </p>
      </div>

      {/* Top Category */}
      <div className="bg-orange-100 dark:bg-orange-800 p-4 rounded shadow text-black dark:text-white">
        <h3 className="font-semibold">Top Category</h3>
        <p className="text-xl font-bold text-orange-700 dark:text-orange-300">
          {topCategory}
        </p>
      </div>

    </div>
  );
};

export default Insights;