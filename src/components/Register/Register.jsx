import React, { useState } from "react";
import Select from "react-select";
import "./register.css";
import Form from "@formio/react"
import { Alert, Button, Form as BootstrapForm } from "react-bootstrap";
import { Form as FormioForm } from "@formio/react"; // Alias Form to FormioForm

const skills = [
  { value: "react", label: "React" },
  { value: "vuejs", label: "Vue.js" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
  { value: "javascript", label: "JavaScript" },
  { value: "nodejs", label: "Node.js" }
];

const initialState = {
  name: "",
  email: "",
  password: ""
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const [subscribe, setSubscribe] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    const allFieldsEntered = Object.keys(state).every(
      (key) => state[key].trim() !== "" && selectedSkill && subscribe
    );
    if (allFieldsEntered) {
      // code for doing registration
      setSuccessMsg("You have successfully registered");
      setTimeout(() => {
        setSuccessMsg("");
        setState(initialState);
        setSelectedSkill(null);
        setSubscribe(false);
      }, 2000);
    } else {
      setErrorMsg("All the fields are required.");
    }
  };
  return (
    <div className="registration">
      <div className="container">
        <h2 className="title" data-testid="title">Register</h2>
        <BootstrapForm onSubmit={handleFormSubmit}>
          <h6 className="subtitle">
            Please enter your details below to register yourself.
          </h6>
          {successMsg && <Alert variant="success">{successMsg}</Alert>}
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <BootstrapForm.Group className="mb-3" controlId="name">
            <BootstrapForm.Label>Name</BootstrapForm.Label>
            <BootstrapForm.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={state.name}
              onChange={handleInputChange}
            />
          </BootstrapForm.Group>
          <BootstrapForm.Group className="mb-3" controlId="email">
            <BootstrapForm.Label>Email</BootstrapForm.Label>
            <BootstrapForm.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={state.email}
              onChange={handleInputChange}
            />
          </BootstrapForm.Group>
          <BootstrapForm.Group className="mb-3" controlId="password">
            <BootstrapForm.Label>Password</BootstrapForm.Label>
            <BootstrapForm.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
            />
          </BootstrapForm.Group>
          <BootstrapForm.Group className="mb-3" controlId="password">
            <BootstrapForm.Label>Select your skills</BootstrapForm.Label>
            <Select
              options={skills}
              isMulti
              value={selectedSkill}
              onChange={(selectedOption) => setSelectedSkill(selectedOption)}
            />
          </BootstrapForm.Group>
          <BootstrapForm.Group className="mb-3" controlId="newsletter">
            <BootstrapForm.Check
              type="checkbox"
              label="Subscribe to our newsletter"
              checked={subscribe}
              onChange={(event) => setSubscribe(Boolean(event.target.value))}
            />
          </BootstrapForm.Group>
          <BootstrapForm.Group>
            <Button variant="secondary" type="submit">
              Register
            </Button>
          </BootstrapForm.Group>
        </BootstrapForm>
      </div>

    </div>
  );
};

export default Register;