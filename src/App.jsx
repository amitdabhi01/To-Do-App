import { React, useState } from "react";
import InputForm from "./Components/InputForm";
import Header from "./Components/Header";
import ListData from "./Components/ListData";

const App = () => {
  const initialValues = [
    {
      id: 1,
      task: "Learn",
      description: "Learn react in detail",
      completed: true,
    },
  ];

  const [todoData, setTodoData] = useState(initialValues);

  const [editVal, setEditVal] = useState(null);

  const addTodo = (input) => {
    if (!input.task || !input.description) {
      return alert("Task and Description data is required");
    } else if (editVal) {
      setTodoData((prev) =>
        prev.map((t) =>
          t.id === editVal.id
            ? {
                ...t,
                task: input.task,
                description: input.description,
                completed: false,
              }
            : t
        )
      );
      setEditVal(null);
    } else {
      const newData = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
        completed: false,
      };
      setTodoData((prevData) => [...prevData, newData]);
    }
  };

  const editTodo = (id) => {
    const editTodo = todoData.find((t) => t.id === id);

    setEditVal(editTodo);
  }

  const toggleTaskCompleted = (id) => {
    setTodoData((prevData) =>
      prevData.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <Header />

      <InputForm addTodo={addTodo} editVal={editVal}/>

      <ListData todo={todoData} toggleCompleted={toggleTaskCompleted} editTodo={editTodo}/>
    </>
  );
};

export default App;
