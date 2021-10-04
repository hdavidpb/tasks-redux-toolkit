import React from "react";
import * as sc from "./styles";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

const TaskPage = () => {
  return (
    <sc.ContainerTasks>
      <TaskForm />
      <TasksList />
    </sc.ContainerTasks>
  );
};

export default TaskPage;
