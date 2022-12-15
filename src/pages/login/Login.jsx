import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FullCenterDiv, CenterDiv } from "../../styledStyles";
import { Link, useNavigate } from "react-router-dom";

import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";
import axios from "axios";

const Box = styled(CenterDiv)`
  position: relative;
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

const FailMessage = styled.p`
  color: red;
  position: absolute;
  top: 16px;
`;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVaild, setIsValid] = useState(false);
  const [isFail, setIsFail] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") setIsValid(true);
    else setIsValid(false);
  }, [email, password]);

  const axiosSignIn = useCallback(
    async (email, password) => {
      try {
        const url = process.env.REACT_APP_API_URL;
        const response = await axios.post(
          url + "/auth/signin",
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
        const { access_token } = await response.data;
        localStorage.setItem("token", access_token);
        navigate("/todo");
      } catch (err) {
        setIsFail(true);
      }
    },
    [navigate]
  );

  const submidHandler = (event) => {
    event.preventDefault();
    if (isVaild) {
      axiosSignIn(email, password);
    }
  };

  return (
    <FullCenterDiv>
      <Box>
        {isFail ? <FailMessage>로그인 실패!</FailMessage> : null}
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
