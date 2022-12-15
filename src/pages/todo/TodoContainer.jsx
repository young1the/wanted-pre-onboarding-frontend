import styled from "styled-components";
import Todo from "./Todo";

const TodosContainer = styled.div`
  width: 100%;
  height: 420px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TodoContainer = ({ todos, setTodos }) => {
  return (
    <TodosContainer>
      {todos
        ? todos.map((ele) => {
            return (
              <Todo
                key={`${ele.id}${ele.userId}`}
                id={ele.id}
                todo={ele.todo}
                isCompleted={ele.isCompleted}
                userId={ele.userId}
                setTodos={setTodos}
              />
            );
          })
        : null}
    </TodosContainer>
  );
};

export default TodoContainer;
