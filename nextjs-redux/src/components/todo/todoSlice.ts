import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

export interface TodoState {
  id: string;
  title: string;
}

const initialState: TodoState[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return state.concat(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
