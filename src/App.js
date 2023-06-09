import { useEffect, useState } from "react";
import _ from "lodash";
import Chart from "./components/Chart/Chart";
import ExpenseNew from "./components/Expenses/ExpenseNew";
import ExpenseSearch from "./components/Expenses/ExpenseSearch";
import ExpensesList from "./components/Expenses/ExpensesList";
import useFormatter from "./hooks/useFormatter";
import './App.css'

const App = () => {
  const initialExpenses = [
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
  ];

  const initialChartData = [
    // chart data
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

  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [chartData, setChartData] = useState(initialChartData);
  const { formatDate } = useFormatter();
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    updateChartData(initialExpenses);
  }, []);

  const updateChartData = (expensesData) => {
    const data = expensesData.map((ex) => ({
      id: getExpenseMonth(ex),
      value: ex.price,
    }));

    const newCharts = data.reduce((charts, data) => {
      const id = data.id;
      const value = parseFloat(charts[id].value) + parseFloat(data.value);
      return [
        ...charts.slice(0, id),
        { label: charts[id].label, value },
        ...charts.slice(id + 1),
      ];
    }, initialChartData);

    setChartData(newCharts);
  };

  const getExpenseMonth = (expense) => new Date(expense.date).getMonth();

  const handleAdd = (newExpense) => {
    setExpenses((prevExpenses) => {
      const newExpenses = [newExpense, ...prevExpenses];
      updateChartData(newExpenses);
      return newExpenses;
    });
  };

  const maxYear = formatDate(
    _.maxBy(expenses, (o) => formatDate(o.date)[1]).date
  )[1];
  const minYear = formatDate(
    _.minBy(expenses, (o) => formatDate(o.date)[1]).date
  )[1];

  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => ({
    value: i + Number(minYear),
    label: (i + Number(minYear)).toString(),
  })).concat({ label: "All", value: "All" });

  const handleSearch = (query) => {
    setQuery(query.toLowerCase());
  };

  const handleFilter = (year) => {
    setYear(year);
  };

  const filteredExpenses = expenses
    .filter(
      (expense) =>
        year === "All" || year === "" || formatDate(expense.date)[1] === year
    )
    .filter((expense) => !query || expense.title.toLowerCase().includes(query));

  return (
    <div className="container">
      <Chart data={chartData} />
      <ExpenseNew onAdd={handleAdd} />
      <ExpenseSearch
        filter={years}
        onSearch={handleSearch}
        onFilter={handleFilter}
      />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
};

export default App;
