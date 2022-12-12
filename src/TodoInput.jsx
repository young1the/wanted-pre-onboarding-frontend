import styled from "styled-components"
import axios from "axios";
import {useCallback} from "react"
import { useRef } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    & > input {
        width: 100%;
        height: 50px;
        border-radius: 4px;
        border: none;
        background: #E5E5E5;
        padding: 16px;
        font-size: 20px;
    }
    & > button {
        width: 50px;
        height: 50px;
        border-radius: 4px;
        background: #1152FD;
        color: white;
        border: none;
        cursor: pointer;
    }
`

const TodoInput = () => {
  const inputRef = useRef();
  const creatTodo = useCallback(async (todo) => {
    try {
      const token = localStorage.getItem('token');
      const response = axios({
        method: "post",
        url: `https://pre-onboarding-selection-task.shop/todos`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `application/json`,
        },
        data: { todo },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Wrapper>
        <input ref={inputRef} type="text" placeholder="할 일을 입력해주세요."/>
        <button onClick={()=>{creatTodo(inputRef.current?.value)}}>✏️</button>
    </Wrapper>
  )
}

export default TodoInput

