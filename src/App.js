import Banner from "./components/Banner";
import Header from "./components/Header";
import { Card } from "@mui/material";
import TestingComponent from "./TestingComponent";
import { useState } from "react";
import Todo from "./components/Todo";

const initialFormState = {
  title: "",
  description: "",
  deadline: new Date(),
  priority: "low",
};

function App() {
  const [todo, setTodo] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Card>
      <Banner />
      <Header />
      <h1>Hello</h1>
      <Todo />
      <TestingComponent />
    </Card>
  );
}

export default App;
