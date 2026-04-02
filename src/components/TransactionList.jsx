import { useState } from "react";

const TransactionList = ({ data, role, deleteTransaction }) => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  // Filter logic
  const filteredData = data.filter((t) => {
    return (
      t.category.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter === "all" || t.type === typeFilter)
    );
  });

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">
        Transactions
      </h2>

      {/* Search + Filter */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by category..."
          className="border p-2 w-full rounded text-black dark:bg-gray-800 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded text-black dark:bg-gray-800 dark:text-white"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full border rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((t) => (
              <tr
                key={t.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white"
              >
                <td className="p-2 border">{t.date}</td>
                <td className="p-2 border">₹{t.amount}</td>
                <td className="p-2 border">{t.category}</td>
                <td className="p-2 border capitalize">{t.type}</td>

                <td className="p-2 border">
                  {role === "admin" && (
                    <button
                      onClick={() => {
                        if (window.confirm("Delete this transaction?")) {
                          deleteTransaction(t.id);
                        }
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;