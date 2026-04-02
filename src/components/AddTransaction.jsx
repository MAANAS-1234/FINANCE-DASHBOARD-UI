import { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    };

    addTransaction(newTransaction);

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-2">
      <h2 className="font-semibold">Add Transaction</h2>

      <input
        type="date"
        className="border p-2 w-full"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <input
        type="number"
        placeholder="Amount"
        className="border p-2 w-full"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <input
        type="text"
        placeholder="Category"
        className="border p-2 w-full"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <select
        className="border p-2 w-full"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button className="bg-green-500 text-white px-4 py-2">
        Add
      </button>
    </form>
  );
};

export default AddTransaction;