import { Action, AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import todoReducer, { TodoListState, TodoState } from "../components/todo/todoSlice";
import thunkMiddleware from 'redux-thunk';

export function makeStore() {
  return configureStore({
    reducer: {
      todoReducer,
    },
    middleware: [thunkMiddleware],
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<TodoListState>
>
export default store;
