import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FullCenterDiv, CenterDiv } from "./styledStyles";
import { Link } from "react-router-dom";

import InputEmail from "./components/InputEmail";
import InputPassword from "./components/InputPassword";
import axios from "axios";

const Box = styled(CenterDiv)`
  width: 450px;
  height: 660px;
  border: 1px solid black;
  border-radius: 8px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & > h1 {
    display: inline-block;
    margin-bottom: 1rem;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  margin-top: 16px;
  text-align: right;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  & > label {
    display: flex;
    flex-direction: column;
  }
  & > button {
    height: 50px;
    background: ${(props) => (props.isVaild ? `#1152FD` : "gray")};
    color: white;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    margin-top: 16px;
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVaild, setIsValid] = useState(false);

  useEffect(() => {
    if (email && password) setIsValid(true);
    else setIsValid(false);
  }, [email, password]);

  const axiosSignUp = useCallback(async (email, password) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/auth/signup",
        {
          email: email,
          password: password,
        },
        {
          Headers: {
            "Content-Type": `application/json`,
          },
        }
      );
      console.log(email, password);
      const data = await response.data;
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const submidHandler = (event) => {
    event.preventDefault();
    if (isVaild) {
      axiosSignUp(email, password);
      console.log("send req");
    }
  };

  return (
    <FullCenterDiv>
      <Box>
        <Container>
          <Form isVaild={isVaild}>
            <h1>SIGN IN</h1>
            <InputEmail setEmail={setEmail} />
            <InputPassword setPassword={setPassword} />
            <button onClick={submidHandler}>SIGN IN</button>
          </Form>
          <StyledLink to="/sign-up">SIGN UP</StyledLink>
        </Container>
      </Box>
    </FullCenterDiv>
  );
}

export default Login;
