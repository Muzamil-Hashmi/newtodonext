import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // todo:[],
    todo: JSON.parse(localStorage.getItem("todos")) || [],


}

export const todoslice = createSlice(
    {
        name: 'todoslice',
        initialState: initialState,
        reducers: {
            addtodos: (state, action) => {
                state.todo.push(action.payload);
                localStorage.setItem("todos", JSON.stringify(state.todo))

            },
            deleteTodo: (state, action) => {
                const newItems = state.todo.filter((items) => items.id !== action.payload);
                state.todo = newItems;
                localStorage.setItem("todos", JSON.stringify(state.todo))
            },
            updateTodo: (state, action) => {
                const { id, title } = action.payload;
                const todo = state.todo.find(item => item.id === id);
                if (todo) {
                    todo.title = title;
                    localStorage.setItem("todos", JSON.stringify(state.todo))
                }
            },

        }
    }
)

export default todoslice.reducer;
export const { addtodos, deleteTodo, updateTodo } = todoslice.actions;

