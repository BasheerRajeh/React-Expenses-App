import ExpensesList from "./components/Expenses/ExpensesList";
import Card from "./components/shared/Card";
import Icon from "./components/shared/Icon";
import Input from "./components/shared/Input";

function App() {
  const expenses = [
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
  ];

  return (
    <div>
      <Input
        name="expense"
        value=""
        placeholder="Enter new expense..."
        icon={"dollar"}
      />
      <Input
        name="expense"
        value=""
        placeholder="Enter new expense..."
        icon={"calendar"}
      />
      <Input
        name="expense"
        value=""
        placeholder="Enter new expense..."
        icon={"pen"}
      />
    </div>
  );
}

export default App;
