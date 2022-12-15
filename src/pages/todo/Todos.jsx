import { useState, useEffect } from "react";
import styled from "styled-components";
import { FullCenterDiv } from "../../styledStyles";
import TodoInput from "./TodoInput";
import TodoContainer from "./TodoContainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TodosWrapper = styled.div`
  width: 550px;
  height: 660px;
  padding: 30px 34px;
  border: 1px solid black;
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  align-items:flex-start;
`;

const LogoutWrapper = styled.div`
width:100%;
display:flex;
justify-content: flex-end;
`

const LogoutButton = styled.button`
  border: none;
  background: #1152FD;
  border-radius: 4px;
  padding: 8px;
  color:white;
`

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const getTodos = async () => {
    const token = localStorage.getItem("token");
    const response = await axios({
      method: "get",
      url: `https://pre-onboarding-selection-task.shop/todos`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await setTodos(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <FullCenterDiv>
      <TodosWrapper>
        <h1>Todos</h1>
        <TodoInput setTodos={setTodos}></TodoInput>
        <TodoContainer todos={todos} setTodos={setTodos} />
        <LogoutWrapper>
      <LogoutButton onClick={()=>{localStorage.removeItem('token'); navigate("/")}}>Logout</LogoutButton>
        </LogoutWrapper>
      </TodosWrapper>
    </FullCenterDiv>
  );
};

export default Todos;
