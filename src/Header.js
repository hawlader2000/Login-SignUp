import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import signup from "./images/signUp.png";
import Form from "react-bootstrap/Form";
import styles from "./styles/style.module.css";
const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("login");
  };
  return (
    <>
      <Navbar bg="light" expand="lg" className="pl-5">
        <Container>
          <Navbar.Brand>Sign Up Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id={styles.formsectionh1}>
        <h1 id={styles.header}>Sign Up</h1>
        <div className="d-flex flex-row">
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>FirstName</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="FirstName"
                  id={styles.input}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="password" placeholder="LastName" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div>
            <Image src={signup} id={styles.img} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
