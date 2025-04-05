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
  Container,
  Navbar,
  NavbarText,
  NavbarBrand,
  Alert,
  CardTitle,
  FormFeedback,
} from "reactstrap";

function Todo() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [message, setmessage] = useState(false);
  console.log("Task", list);

  const addTask = () => {
    if (task.trim() !== "") {
      setList([...list, task]); // Append new task to the list
      setTask(""); // Clear input after adding
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTask();
    setmessage(false);
  };

  const handleRemove = (item) => {
    console.log("Res", item);
    const updatedList = list.filter((items, i) => i !== item);
    setList(updatedList);
    setmessage(true);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col>
          {/* <Alert color="primary">Task removed!</Alert> */}

          {/* Add Task Form */}

          <Card className="shadow p-3 mb-3">
            <Navbar className="mx-auto">
              <NavbarBrand>
                <img src={require("./images/tutedude.png")} />
                <h2>To-Do List</h2>
              </NavbarBrand>
            </Navbar>
            <CardBody>
              <Form onSubmit={onSubmit} className="d-flex flex-column">
                <Row>
                  <Col md={10}>
                    <FormGroup>
                      <Input
                        id="taskname"
                        type="text"
                        placeholder="Enter a task name"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        required
                      />
                    </FormGroup>
                  </Col>

                  <Col md={2}>
                    <Button type="submit" color="primary">
                      Add Task
                    </Button>
                  </Col>
                </Row>
              </Form>
            {message && (
              <small className="text-danger">Task Removed Successfully!</small>
            )}
            </CardBody>
          </Card>

          {/* {list.length > 0 && (
            <Card className="shadow">
              <CardBody>
                <Table bordered responsive>
                  <thead className="bg-light">
                    <tr>
                      <th>Sr no.</th>
                      <th>Task</th>
                      <th>Action</th>
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
                          <td>
                            <Button
                              color="danger"
                              onClick={() => handleRemove(index)}
                            >
                              Remove task
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
                      )} */}
          <Container>
            {list.map((item, index) => (
              <Col md={12}>
                <Card className="shadow mb-3" key={index}>
                  <CardHeader>
                    <div className="d-flex justify-content-between">
                      <h3>{item}</h3>
                      <Button
                        color="danger"
                        outline
                        size="sm"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </Col>
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Todo;
