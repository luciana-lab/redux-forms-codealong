export default function manageTodo(state = {
  todos: [],
}, action) {
  // 3. Update State (update the reducer so it'll add a new todo each time we receive an action)
  // add a switch statement to the reducer that switches on our action type
  // add a case for our ADD_TODO action
  switch (action.type) {
    case 'ADD_TODO':
      console.log({ todos: [...state.todos, action.payload.text] })
      return { todos: [...state.todos, action.payload.text] }
    default:
      return state
  }
  // console.log("reducer received this action:", action);
  // return state;
}