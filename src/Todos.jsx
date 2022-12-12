import { useState } from "react";
import styled from "styled-components";
import { FullCenterDiv } from "./styledStyles";
import TodoInput from "./TodoInput";
import TodoContainer from "./TodoContainer";
import fetchTodos from "./fetchTodo";
import { useEffect } from "react";
import axios from "axios";

// {
//     "id": 1,
//     "todo": "과제하기",
//     "isCompleted": false
//     "userId": 1,
//   }

// /Assignment4
// /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
// 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
// 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면
// 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

const TodosWrapper = styled.div`
  width: 550px;
  height: 660px;
  padding: 30px 34px;
  border: 1px solid black;
  border-radius: 8px;
`;

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: "get",
      url: `https://pre-onboarding-selection-task.shop/todos`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      const _todos = await response.data;
    setTodos(_todos);
  }

  useEffect(()=>{
    getTodos();
  },[])


  return (
    <FullCenterDiv>
      <TodosWrapper>
        <h1>Todos</h1>
        <TodoInput></TodoInput>
          <TodoContainer todos={todos}/>
      </TodosWrapper>
    </FullCenterDiv>
  );
};

export default Todos;
