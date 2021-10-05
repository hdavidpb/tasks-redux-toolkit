import React, { useEffect } from "react";
import * as sc from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  checkedTask,
  deleteTask,
  getTasks,
} from "../../redux/features/tasks/tasksSlice";
import completed from "../../assets/images/completed.svg";
const TasksList = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((store: RootState) => store.tasks);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <sc.TasksListContainer>
      <sc.TitleLabel>Tasks Lists</sc.TitleLabel>
      {tasks.length === 0 ? (
        <sc.Image src={completed} />
      ) : (
        <sc.TasksTableContainer>
          {tasks.map((task, index) => (
            <sc.TasksListContainer key={task.id}>
              <sc.TasksItemContainer
                style={{
                  background: task.done
                    ? "rgb(30 137 216)"
                    : "rgb(255 215 0 / 95%)",
                }}
              >
                <h4>{task.title}</h4>
                <p> {task.description}</p>
                <sc.DeleteButton onClick={() => dispatch(deleteTask(task.id))}>
                  X
                </sc.DeleteButton>
                <sc.CheckBtn onClick={() => dispatch(checkedTask(index))}>
                  {!task.done ? "☑️ " : "🙅‍♂️"}
                </sc.CheckBtn>
              </sc.TasksItemContainer>
            </sc.TasksListContainer>
          ))}
        </sc.TasksTableContainer>
      )}
    </sc.TasksListContainer>
  );
};

export default TasksList;
