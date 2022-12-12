import axios from "axios";

async function fetchTodos() {
	let todos = null;
	const token = localStorage.getItem('token');
	const response = await axios({
        method: "get",
        url: `https://pre-onboarding-selection-task.shop/todos`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
	todos = await response.data;
}

  export default fetchTodos;
