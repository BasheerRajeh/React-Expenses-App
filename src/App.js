import { useEffect, useState } from "react";
import Chart from "./components/Chart/Chart";
import ChartBar from "./components/Chart/ChartBar";
import ExpenseNew from "./components/Expenses/ExpenseNew";
import ExpensesList from "./components/Expenses/ExpensesList";
import Card from "./components/shared/Card";
import Icon from "./components/shared/Icon";
import Input from "./components/shared/Input";
import useFormatter from "./hooks/useFormatter";

function App() {
  const { formatDate } = useFormatter();
  const [expenses, setExpenses] = useState([
    {
      title: "Consectetur adipiscing elit.",
      date: new Date(2021, 5, 15),
      price: 1500,
    },
    {
      title: "Sed do eiusmod tempor incididunt.",
      date: new Date(2022, 1, 10),
      price: 3000,
    },
    {
      title: "Ut labore et dolore magna aliqua.",
      date: new Date(2022, 8, 20),
      price: 1000,
    },
  ]);

  const [charts, setCharts] = useState([
    { label: "January", value: 0 },
    { label: "February", value: 0 },
    { label: "March", value: 0 },
    { label: "April", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "August", value: 0 },
    { label: "September", value: 0 },
    { label: "October", value: 0 },
    { label: "Novembre", value: 0 },
    { label: "December", value: 0 },
  ]);

  useEffect(() => {
    fill(expenses);
  }, []);

  const fill = () => {
    setCharts((prev) => {
      const newCharts = [
        { label: "January", value: 0 },
        { label: "February", value: 0 },
        { label: "March", value: 0 },
        { label: "April", value: 0 },
        { label: "May", value: 0 },
        { label: "June", value: 0 },
        { label: "July", value: 0 },
        { label: "August", value: 0 },
        { label: "September", value: 0 },
        { label: "October", value: 0 },
        { label: "Novembre", value: 0 },
        { label: "December", value: 0 },
      ];
      for (let expense of expenses) {
        let value =
          parseFloat(newCharts[new Date(expense.date).getMonth()].value) +
          parseFloat(expense.price);
        newCharts[new Date(expense.date).getMonth()] = {
          label: newCharts[new Date(expense.date).getMonth()].label,
          value: value,
        };
      }
      return newCharts;
    });
  };

  const refill = (month, price) => {
    setCharts((prev) => {
      const newCharts = [...prev];
      newCharts[month].value += parseFloat(price);
      return newCharts;
    });
  };

  const handleAdd = (newExpense) => {
    setExpenses((prev) => {
      const newExpenses = [newExpense, ...prev];
      refill(new Date(newExpense.date).getMonth() - 1, newExpense.price);
      return newExpenses;
    });
  };

  return (
    <div style={{ height: "50vh" }}>
      <Chart bars={charts} />
      <ExpenseNew onAdd={handleAdd} />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
