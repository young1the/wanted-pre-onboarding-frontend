import { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const TodoWrapper = styled.div`
  padding: 16px;
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

const Todo = ({ id, todo, isCompleted, userId, setTodos }) => {
  const inputRef = useRef();
  const [isChange, setIsChange] = useState(false);
  const [_isCompleted, setIsCompleted] = useState(isCompleted);
  const [_todo, setTodo] = useState(todo);

  const updateTodo = async (input, checked) => {
    try {
      const token = localStorage.getItem("token");
      const url = process.env.REACT_APP_API_URL;
      await axios({
        method: "put",
        url: url + `/todos/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `application/json`,
        },
        data: { todo: input, isCompleted: checked },
      });
    } catch (err) {
      alert("axios error");
    }
  };

  const deleteTodo = async () => {
    try {
      const token = localStorage.getItem("token");
      const url = process.env.REACT_APP_API_URL;
      await axios({
        method: "delete",
        url: url + `/todos/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(prev=>prev.filter((ele)=> ele.id !== id));
    } catch (err) {
      alert("axios error");
    }
  };

  return (
    <TodoWrapper>
      <Content>
        <CheckBox
          type="checkbox"
          checked={_isCompleted}
          onChange={(e) => {
            updateTodo(_todo, e.target.checked);
            setIsCompleted(e.target.checked);
          }}
        />
        {isChange ? (
          <TitleInput ref={inputRef} type="text"></TitleInput>
        ) : (
          <Title>{_todo}</Title>
        )}
      </Content>
      {isChange ? (
        <ControlContainer>
          <div
            onClick={() => {
              updateTodo(inputRef.current.value, _isCompleted);
              setTodo(inputRef.current.value);
              setIsChange(false);
            }}
          >
            ✅
          </div>
          <div
            onClick={() => {
              setIsChange(false);
            }}
          >
            🔙
          </div>
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
          <div onClick={deleteTodo}>❌</div>
        </ControlContainer>
      )}
    </TodoWrapper>
  );
};

export default Todo;
