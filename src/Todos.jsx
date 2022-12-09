import styled from "styled-components"
import { FullCenterDiv } from "./styledStyles";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

// {
//     "id": 1,
//     "todo": "과제하기",
//     "isCompleted": false
//     "userId": 1,
//   }

// /Assignment4
// /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
// 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
// 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

const TodosWrapper = styled.div`
  width: 550px;
    height: 660px;
    padding: 30px 34px;
    border: 1px solid black;
    border-radius: 8px;
    `

const TodosContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    overflow: auto;
    flex-direction: column;
    justify-content: flex-start;
    padding: 34px 0;
`

const Todos = () => {
  return (
    <FullCenterDiv>
        <TodosWrapper>
            <h1>Todos</h1>
            <TodoInput></TodoInput>
            <TodosContainer>
                <Todo/>
                <Todo/>
            </TodosContainer>
        </TodosWrapper>
    </FullCenterDiv>
  )
}

export default Todos