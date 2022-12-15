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

const TodoInput = ({setTodos}) => {
  const inputRef = useRef();
  const creatTodo = useCallback(async (todo) => {
    try {
      const token = localStorage.getItem('token');
      const url = process.env.REACT_APP_API_URL;
      const response = await axios({
        method: "post",
        url: url + `/todos`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `application/json`,
        },
        data: { todo },
      });
      const log = await response.data;
      setTodos(prev=>[...prev,log]);
      inputRef.current.value = "";
    } catch (err) {
      alert("axios error");
    }
  }, [setTodos]);

  return (
    <Wrapper>
        <input ref={inputRef} type="text" placeholder="할 일을 입력해주세요."/>
        <button onClick={()=>{creatTodo(inputRef.current?.value)}}>✏️</button>
    </Wrapper>
  )
}

export default TodoInput

