import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITask {
  title: string;
  description: string;
  done: boolean;
  id: string;
}

export interface TasksState {
  tasks: ITask[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const tasks = [...state.tasks, action.payload];

      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    getTasks: (state) => {
      if (localStorage.getItem("tasks")) {
        state.tasks = JSON.parse(localStorage.getItem("tasks")!);
        console.log("Existe");
      } else {
        state.tasks = initialState.tasks;
        console.log("No Existe");
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      console.log(newTasks);
      state.tasks = newTasks;
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
    checkedTask: (state, action: PayloadAction<number>) => {
      state.tasks[action.payload].done = !state.tasks[action.payload].done;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, getTasks, deleteTask, checkedTask } =
  tasksSlice.actions;

export default tasksSlice;
