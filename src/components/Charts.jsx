import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Charts = ({ data }) => {
  // Group data by category
  const categoryMap = {};

  data.forEach((t) => {
    if (!categoryMap[t.category]) {
      categoryMap[t.category] = 0;
    }
    categoryMap[t.category] += t.amount;
  });

  const chartData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  const COLORS = ["#00C49F", "#FF8042", "#0088FE", "#FFBB28", "#AF19FF"];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Spending by Category
      </h2>

      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Charts;