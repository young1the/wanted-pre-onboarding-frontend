import { useState } from "react";
import styled from "styled-components";

// Assignment5
// 투두 리스트의 수정, 삭제 기능을 구현해주세요
// 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면
// 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
// 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며
// 해당 버튼을 통해서 수정 내용을
// 제출하거나 수정을 취소할 수 있도록 해주세요
// 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요

const TodoWrapper = styled.div`
  padding: 16px;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: lightgray;
  }
  font-size: 20px;
`;

const ControlContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  & > div {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0 24px;
`;

const CheckBox = styled.input`
  width: 18px;
  height: 18px;
`;

const Title = styled.div`
  font-size: 18px;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
`;

// {
//     "id": 1,
//     "todo": "과제하기",
//     "isCompleted": false
//     "userId": 1,
//   }

const Todo = ({id, todo, isCompleted, userId}) => {
  const [isChange, setIsChange] = useState(false);

  return (
    <TodoWrapper>
      <Content>
        <CheckBox type="checkbox" value={isCompleted}/>
        {isChange ? (
          <TitleInput type="text"></TitleInput>
        ) : (
          <Title>{id}. {todo}</Title>
        )}
      </Content>
      {isChange ? (
        <ControlContainer>
          <div
            onClick={() => {
              setIsChange(false);
            }}
          >✅</div>
          <div>🔙</div>
        </ControlContainer>
      ) : (
        <ControlContainer>
          <div
            onClick={() => {
              setIsChange(true);
            }}
          >
            🔧
          </div>
          <div>❌</div>
        </ControlContainer>
      )}
    </TodoWrapper>
  );
};

export default Todo;
