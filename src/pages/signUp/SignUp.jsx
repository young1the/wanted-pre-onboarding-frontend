import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FullCenterDiv, CenterDiv } from "../../styledStyles";

import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";
import axios from "axios";

const Box = styled(CenterDiv)`
  width: 450px;
  height: 660px;
  border: 1px solid black;
  border-radius: 8px;
`;

const Container = styled.div`
    position:relative;
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
  & > p {
    width: 100%;
    margin-top: 16px;
    text-align: right;
  }
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
    font-weight:bold;
    border-radius: 4px;
    border: none;
    margin-top: 16px;
  }
`;

const GoBackButton = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 32px;
    cursor: pointer;
`

const InvalidMessage = styled.p`
  display: inline-block;
  color: red;
`

const FailMessage = styled.p`
  color: red;
  position: absolute;
  top: 16px;
`

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [isVaild, setIsValid] = useState(false);
    const [notMatching, setNotMatching] = useState(false);
    const [isFail, setIsFail] = useState(false);

    useEffect(() => {
      if (email && password) {
        if (password === secondPassword) {
          setIsValid(true);
          setNotMatching(false);
        }
        else {
          setNotMatching(true);
          setIsValid(false);
        }
      }
      else setIsValid(false);
    }, [email, password, secondPassword]);

    const axiosSignUP = useCallback(async (email, password) => {
      try {
        const url = process.env.REACT_APP_API_URL;
        const response = await axios.post(
          url + "/auth/signup",
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
        const {access_token} = await response.data;
        localStorage.setItem('token', access_token);
        navigate("/todo");
      } catch (err) {
        setIsFail(true);
      }
    }, [navigate]);

    const submidHandler = (event) => {
      event.preventDefault();
      if (isVaild) {
        axiosSignUP(email, password);
      }
    };


  return (
    <FullCenterDiv>
      <Box>
      {isFail ? <FailMessage>회원가입 실패!</FailMessage> : null}
        <Container>
        <GoBackButton onClick={()=>{navigate(-1)}}>{"<<"}</GoBackButton>
          <Form isVaild={isVaild}>
          <h1>SIGN UP</h1>
          <InputEmail setEmail={setEmail} />
          <InputPassword setPassword={setPassword} />
          <InputPassword setPassword={setSecondPassword} />
            {notMatching ? <InvalidMessage>비밀번호가 일치하지 않습니다.</InvalidMessage> : null}
            <button onClick={submidHandler}>SIGN UP</button>
          </Form>
        </Container>
      </Box>
    </FullCenterDiv>
  );
}

export default SignUp;
