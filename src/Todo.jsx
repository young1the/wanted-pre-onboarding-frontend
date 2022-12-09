import styled from "styled-components"

// Assignment5
// 투두 리스트의 수정, 삭제 기능을 구현해주세요
// 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 
// 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
// 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 
// 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
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
`

const ControlContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`

const Todo = () => {
  return (
    <TodoWrapper>
        <div>밥먹기</div>
        <ControlContainer>
            <div>수정</div>
            <div>삭제</div>
        </ControlContainer>
        {/* <ControlContainer>
            <div>확인</div>
            <div>취소</div>
        </ControlContainer> */}
    </TodoWrapper>
  )
}

export default Todo