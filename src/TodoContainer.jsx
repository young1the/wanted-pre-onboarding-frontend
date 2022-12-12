import styled from "styled-components"
import Todo from "./Todo";

const TodosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: flex-start;
  padding: 34px 0;
`;

const TodoContainer = ({ todos }) => {
	console.log(todos);
  return (
	<TodosContainer>
		{
		todos.map((ele) => {
			return <Todo id={ele.id} todo={ele.todo} isCompleted={ele.isCompleted} userId={ele.userId} />
		})
		}
  </TodosContainer>
  )
}

export default TodoContainer
