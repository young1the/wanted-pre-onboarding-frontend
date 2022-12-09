import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  & > input {
    width: 100%;
    height: 50px;
    border-radius: 4px;
    border: none;
    background: #E5E5E5;
    padding: 16px;
    font-size: 20px;
  }
  & > input:invalid {
    border-color: red;
  }
`;

const InvalidMessage = styled.p`
  display: inline-block;
  position: absolute;
  color: red;
  right: 0;
`

const InputPassword = ({setPassword}) => {
  const [validState, setValidState] = useState("NONE");
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const checkValidate = useCallback((value) => {
    if (value.length < 8)
      setValidState("INVALID");
    else {
      setValidState("VALID");
      setPassword(value);
    }
  },[setPassword]);

  useEffect(()=>{
    let timeout;
    if (value !== "") {
      timeout = setTimeout(checkValidate(value), 500);
    } else {
      setValidState("NONE");
      setPassword("");
    }
    return (()=>{timeout && clearTimeout(timeout)});
  }, [value, checkValidate, setPassword]);

  return (
    <InputContainer>
    <label>password</label>
    <input value={value} onChange={onChangeHandler} type="password" autoComplete="off"/>
    {validState === "INVALID" ? <InvalidMessage>비밀번호는 8자리 이상입니다</InvalidMessage> : null}
    </InputContainer>
  )
}

export default InputPassword