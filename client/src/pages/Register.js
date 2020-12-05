import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Form, Button } from "semantic-ui-react";

const Register = (props) => {
  // const { history } = useHistory();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // MUTATION
  // Array refactoring
  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    // options -> trigger if mutation success
    update(_, result) {
      console.log(result);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  const handleRegister = (e) => {
    e.preventDefault();
    addUser();
  };

  console.log("eee", errors);

  return (
    <div className='form-container'>
      <Form
        onSubmit={handleRegister}
        noValidate
        className={loading ? "loading" : ""}
      >
        <h1>Register</h1>
        <Form.Input
          type='text'
          label='Username'
          placeholder='Username...'
          name='username'
          value={values.username}
          onChange={handleChange}
          error={errors.username ? true : false}
        />
        <Form.Input
          type='email'
          label='Email'
          placeholder='Email...'
          name='email'
          value={values.email}
          onChange={handleChange}
          error={errors.email ? true : false}
        />
        <Form.Input
          type='password'
          label='Password'
          placeholder='Password...'
          name='password'
          value={values.password}
          onChange={handleChange}
          error={errors.password ? true : false}
        />
        <Form.Input
          type='password'
          label='Confirm Password'
          placeholder='Comfirm Password...'
          name='confirmPassword'
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword ? true : false}
        />
        <Button type='submit' color='purple'>
          Register
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className='ui error message'>
          <ul className='list'>
            {Object.values(errors).map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      username
      email
      token
      createdAt
    }
  }
`;

export default Register;
