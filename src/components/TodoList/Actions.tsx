// @ts-nocheck
let nextTodoId = 0;
export default {
  addTodo: (text: string) => ({ type: "ADD_TODO", id: ++nextTodoId, text }),
  toggleTodo: (id: number) => ({ type: "TOGGLE_TODO", id }),
};
