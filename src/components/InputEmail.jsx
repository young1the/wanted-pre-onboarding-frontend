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
`;

const InvalidMessage = styled.p`
  display: inline-block;
  position: absolute;
  color: red;
  right: 0;
`

const InputEmail = ({setEmail}) => {
  const [validState, setValidState] = useState("NONE");
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const checkValidate = useCallback((value) => {
    if (value.indexOf("@") < 0)
      setValidState("INVALID");
    else {
      setValidState("VALID");
      setEmail(value);
    }
  },[setEmail]);

  useEffect(()=>{
    let timeout;
    if (value !== "") {
      timeout = setTimeout(checkValidate(value), 500);
    } else {
      setValidState("NONE");
      setEmail("")
    }
    return (()=>{timeout && clearTimeout(timeout)});
  }, [value, checkValidate, setEmail]);

  return (
    <InputContainer>
    <label>e-mail</label>
    <input value={value} onChange={onChangeHandler} type="email" id="email" />
    {validState === "INVALID" ? <InvalidMessage>올바른 이메일 주소를 입력하세요</InvalidMessage> : null}
    </InputContainer>
  )
}

export default InputEmail