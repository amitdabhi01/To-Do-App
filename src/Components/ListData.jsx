import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const ListData = ({ todo,toggleCompleted,editTodo }) => {
  return (
    <>
      <Container className="border p-5 bg-white rounded-4 shadow">
        <Table responsive className="">
          <thead>
            <tr>
              <th>Status</th>
              <th>Task</th>
              <th>Description</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((todo) => {
                return (
                    <tr key={todo.id}>
                        <td>
                            <input type="checkbox" 
                             checked={todo.completed}
                             onChange={() => {
                                toggleCompleted(todo.id);
                             }}
                            />
                        </td>
                        <td>{todo.task}</td>
                        <td>{todo.description}</td>
                        <td>
                            <button className="btn btn-primary text-white" onClick={() => editTodo(todo.id)}>Edit</button>
                        </td>
                        <td>
                            <button className="btn btn-danger text-white" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ListData;
