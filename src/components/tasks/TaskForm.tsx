import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";
import * as sc from "./styles";
import { useForm } from "react-hook-form";
import { ITask } from "../../redux/features/tasks/tasksSlice";
import { v4 as uuid } from "uuid";
type DataForm = {
  title: string;
  description: string;
};

const TaskForm = () => {
  const dispatch = useDispatch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>();

  const onSubmit = (data: DataForm) => {
    console.log(data);

    const newTask: ITask = {
      title: data.title,
      description: data.description,
      id: uuid(),
      done: false,
    };

    dispatch(addTask(newTask));
    reset();
  };

  return (
    <sc.TasksFormContainer>
      <sc.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <sc.TitleLabel>Agregar tareas</sc.TitleLabel>

        <sc.InputContainer>
          <h6>Title</h6>
          <input
            type="text"
            placeholder="ej: sacar al perro"
            {...register("title", {
              required: { value: true, message: "Title required" },
            })}
          />
        </sc.InputContainer>
        <sc.InputContainer>
          <h6>Description</h6>
          <textarea
            placeholder="ej: Tengo que sacar al perro todos los Domingos."
            {...register("description", {
              required: { value: true, message: "Description required" },
            })}
          />
        </sc.InputContainer>
        <sc.Button type="submit">Add Task</sc.Button>
      </sc.FormContainer>
    </sc.TasksFormContainer>
  );
};

export default TaskForm;
