import styled from "styled-components"

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
        height: 50px;
        border-radius: 4px;
        background: #1152FD;
        color: white;
        border: none;
    }
`

const TodoInput = () => {
  return (
    <Wrapper>
        <input type="text" placeholder="할 일을 입력해주세요."/>
        <button>SEND</button>
    </Wrapper>
  )
}

export default TodoInput

