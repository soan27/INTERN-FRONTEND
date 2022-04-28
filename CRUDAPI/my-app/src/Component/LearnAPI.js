import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, Row, Col, Form } from "react-bootstrap";
function LearnAPI() {
  const [listUser, setlistUser] = useState([]);
  const [username, setusername] = useState("");
  const [description, setdescription] = useState("");
  const [flagStatus, setflagStatus] = useState(false);
  const [idEdit, setidEdit] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let result = await axios.get(
        "https://624ee282bdda77e9a9b67962.mockapi.io/LearnReactJS"
      );
      setlistUser(result.data);
    } catch (error) {
      alert("Lỗi API");
    }
  };

  const renderListUser = () => {
    if (listUser) {
      return (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {listUser.map((item, index) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      onClick={() => {
                        setusername(item.name);
                        setdescription(item.description);
                        setidEdit(item.id);
                        setflagStatus(true);
                        // setidEdit(item.id);
                      }}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteUser(item.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      );
    }
  };

  const deleteUser = async (item) => {
    try {
      await axios.delete(
        `https://624ee282bdda77e9a9b67962.mockapi.io/LearnReactJS/${item}`
      );
      fetchData();
    } catch (error) {}
  };

  const addUser = async () => {
    try {
      let resultAdd = await axios.post(
        "https://624ee282bdda77e9a9b67962.mockapi.io/LearnReactJS/",
        {
          name: username,
          description: description,
          image: "https://loremflickr.com/320/240",
          price: 1000,
        }
      );
      setlistUser(resultAdd);
      fetchData();
    } catch (error) {}
  };

  const editUser = async () => {
    try {
      await axios.put(
        `https://624ee282bdda77e9a9b67962.mockapi.io/LearnReactJS/${idEdit}`,
        {
          name: username,
          image: "https://loremflickr.com/320/240",
          description: description,
          price: 1000,
        }
      );

      setusername("");
      setdescription("");
      setflagStatus(false);
      fetchData();
    } catch (error) {
      alert("Loi API Edit");
    }
  };
  const onChangeName = (e) => {
    setusername(e.target.value);
  };
  const onChangeDescription = (e) => {
    setdescription(e.target.value);
  };
  return (
    <div>
      <Form className="mx-2 my-2">
        <Form.Group controlId="inputList">
          <Row>
            <Col md={5}>
              <Form.Control
                type="text"
                placeholder="Enter your username..."
                required
                value={username}
                onChange={onChangeName}
              />
            </Col>
            <Col md={5}>
              <Form.Control
                type="text"
                placeholder="Enter your description..."
                required
                value={description}
                onChange={onChangeDescription}
              />
            </Col>
            <Col md={2}>
              <Button onClick={flagStatus ? editUser : addUser}>
                {flagStatus ? "Edit User" : "Add User"}
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      {renderListUser()}
    </div>
  );
}

export default LearnAPI;

// react-router-dom 5.3.0
