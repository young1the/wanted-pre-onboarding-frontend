import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FullCenterDiv, CenterDiv } from "./styledStyles";

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
    background: #1152FD;
    color: white;
    font-weight:bold;
    border-radius: 4px;
    border: none;
    margin-top: 16px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > input {
    width: 100%;
    height: 50px;
    border-radius: 4px;
    border: none;
    background: #E5E5E5;
  }
`;

const GoBackButton = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 32px;
    cursor: pointer;
`

function SignUp() {
    const navigate = useNavigate();

  return (
    <FullCenterDiv>
      <Box>
        <Container>
        <GoBackButton onClick={()=>{navigate(-1)}}>{"<<"}</GoBackButton>
          <Form>
          <h1>SIGN UP</h1>
            <InputContainer>
              <label for="email">e-mail</label>
              <input type="text" id="email" />
            </InputContainer>
            <InputContainer>
              <label for="password">password</label>
              <input type="password" id="password" />
            </InputContainer>
            <InputContainer>
              <label for="password">password</label>
              <input type="password" id="password" />
            </InputContainer>
            <button>SIGN UP</button>
          </Form>
        </Container>
      </Box>
    </FullCenterDiv>
  );
}

export default SignUp;
