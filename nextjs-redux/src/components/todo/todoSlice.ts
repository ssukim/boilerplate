import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { AppState } from "../../app/store";

export interface TodoListState {
  id: string;
  title: string;
}
export interface TodoState {
  todo: TodoListState[];
  status: "idle" | "loading" | "failed";
}

const initialState: TodoState = {
  todo: [],
  status: "idle",
};

export const addTodoAsync = createAsyncThunk(
  "todo/fetchTodo",
  async (params: TodoListState) => {
    const res:TodoListState = await axios
      .post('/api/todo', params)
      .then((res) => res.data)
      .catch((error) => {
        throw new Error(error);
      });

    return res;
  }
);
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoListState>) => ({
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      ...state,
      todo: state.todo.concat(action.payload),
    }),
    deleteTodo: (state, action: PayloadAction<string>) => ({
      ...state,
      todo: state.todo.filter((item) => item.id !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => ({
        ...state,
        status: "idle",
        todo: state.todo.concat(action.payload),
      }));
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export const selectTodoList = (state: AppState) => state.todoReducer.todo

export default todoSlice.reducer;
