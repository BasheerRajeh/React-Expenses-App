import { useState } from "react";
import ExpenseNew from "./components/Expenses/ExpenseNew";
import ExpensesList from "./components/Expenses/ExpensesList";
import Card from "./components/shared/Card";
import Icon from "./components/shared/Icon";
import Input from "./components/shared/Input";

function App() {
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

  const handleAdd = (newExpense) => {
    setExpenses((prev) => [newExpense, ...prev]);
  };

  return (
    <div>
      <ExpenseNew onAdd={handleAdd} />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
