import { useEffect, useState } from "react";
import Chart from "./components/Chart/Chart";
import ExpenseNew from "./components/Expenses/ExpenseNew";
import ExpensesList from "./components/Expenses/ExpensesList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Groceries",
      date: new Date(2022, 2, 15),
      price: 55.67,
    },
    {
      title: "Internet Bill",
      date: new Date(2022, 2, 20),
      price: 80.99,
    },
    {
      title: "Gas Bill",
      date: new Date(2022, 2, 22),
      price: 35.42,
    },
    {
      title: "Eating Out",
      date: new Date(2022, 2, 25),
      price: 45.35,
    },
    {
      title: "Movie Tickets",
      date: new Date(2022, 2, 27),
      price: 30.0,
    },
    {
      title: "Shopping",
      date: new Date(2022, 3, 5),
      price: 120.75,
    },
    {
      title: "Transportation",
      date: new Date(2022, 3, 10),
      price: 25.0,
    },
    {
      title: "Gym Membership",
      date: new Date(2022, 3, 15),
      price: 50.0,
    },
    {
      title: "Phone Bill",
      date: new Date(2022, 3, 20),
      price: 75.0,
    },
  ]);

  const [chartData, setChartData] = useState([
    { id: 1, label: "January", value: 0 },
    { id: 2, label: "February", value: 0 },
    { id: 3, label: "March", value: 0 },
    { id: 4, label: "April", value: 0 },
    { id: 5, label: "May", value: 0 },
    { id: 6, label: "June", value: 0 },
    { id: 7, label: "July", value: 0 },
    { id: 8, label: "August", value: 0 },
    { id: 9, label: "September", value: 0 },
    { id: 10, label: "October", value: 0 },
    { id: 11, label: "Novembre", value: 0 },
    { id: 12, label: "December", value: 0 },
  ]);

  useEffect(() => {
    const data = expenses.map((ex) => {
      const id = getExpenseMonth(ex);
      const value = ex.price;
      const obj = { id: id, value: value };
      return obj;
    });

    initialChart(data, chartData);
  }, []);

  const initialChart = (data, chartData) => {
    const newCharts = data.reduce((charts, data) => {
      const id = data.id
      const value = parseFloat(charts[id].value) + parseFloat(data.value);
      return [
        ...charts.slice(0, id),
        { label: charts[id].label, value },
        ...charts.slice(id + 1),
      ];
    }, chartData);
    setChartData(newCharts);
  };

  const updateChart = (chartData, id, value) => {
    const newCharts = [...chartData];
    newCharts[id].value += parseFloat(value);
    setChartData(newCharts);
    return newCharts;
  };

  const getExpenseMonth = (expense) => new Date(expense.date).getMonth();

  const handleAdd = (newExpense) => {
    setExpenses((prevExpenses) => {
      const newExpenses = [newExpense, ...prevExpenses];
      updateChart(chartData, getExpenseMonth(newExpense), newExpense.price);
      return newExpenses;
    });
  };

  return (
    <div style={{ width: "50vw", margin: "0 auto" }}>
      <Chart data={chartData} />
      <ExpenseNew onAdd={handleAdd} />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
