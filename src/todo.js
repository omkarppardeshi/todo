import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Input,
  Button,
  CardBody,
  Row,
  Col,
  Label,
  Form,
  FormGroup,
  Table,
} from "reactstrap";

function Todo() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setList([...list, task]); // Append new task to the list
      setTask(""); // Clear input after adding
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <Row className="justify-content-center mt-4">
      {/* To-Do List Table */}
      {list.length > 0 && (
        <Col md="6">
        <Card className="shadow">
          <CardHeader>
            <h3 className="text-center">To-Do List</h3>
          </CardHeader>
          <CardBody>
            <Table bordered responsive>
              <thead className="bg-light">
                <tr>
                  <th>Sr no.</th>
                  <th>Task</th>
                </tr>
              </thead>
              <tbody>
                {list.length === 0 ? (
                  <tr>
                    <td colSpan="2" className="text-center">
                      No tasks added yet.
                    </td>
                  </tr>
                ) : (
                  list.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>

      )}
      

      {/* Add Task Form */}
      <Col md="4">
        <Card className="shadow p-3">
          <CardBody>
            <Form onSubmit={onSubmit} className="d-flex flex-column align-items-center">
              <FormGroup className="w-100">
                <Label for="taskname">Task name:</Label>
                <Input
                  id="taskname"
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  required
                />
              </FormGroup>
              <Button type="submit" color="primary" className="w-100">
                Add Task
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Todo;
