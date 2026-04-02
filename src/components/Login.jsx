import { useState } from "react";

const Login = ({ onLogin, onClose }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 Hardcoded credentials (demo)
    if (form.username === "admin" && form.password === "admin123") {
      onLogin();
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-80 text-black dark:text-white">
        
        <h2 className="text-lg font-semibold mb-4">Admin Login</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="border p-2 w-full rounded text-black"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full rounded text-black"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Login
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;