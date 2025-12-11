import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

const InputForm = ({addTodo, editVal}) => {
  const [input, setInput] = useState({
    task:"",
    description:"",
    completed:false
  });

  useEffect(() => {
    editVal ? setInput(editVal) : null;
  }, [editVal]);

  const handleInputData = (identifier,e) => {
    setInput((prev) => {
        return{
            ...prev,
            [identifier]:e.target.value
        }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput({task:"", description:"", completed:false});
  } 

  return (
    <>
      <Container className="mb-5">
        <div className="bg-white border p-5 rounded-4 shadow">
          <h2 className="mb-4">Add New Task</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Task title</Form.Label>
              <Form.Control type="text" placeholder="Enter task title..."
              value={input.task}
              onChange={((e) => handleInputData("task",e))}
            />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task description..."
                value={input.description}
                onChange={((e) => handleInputData("description",e))}
              />
            </Form.Group>
            <button className="add-btn w-100 py-2 rounded-3 text-white border border-none">
              Add Task
            </button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default InputForm;
