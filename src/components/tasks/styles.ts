import styled from "styled-components";

export const ContainerTasks = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1370px) {
    margin: auto;
    width: 1370px;
    border: solid 1px red;
  }
`;

export const TasksFormContainer = styled.div`
  width: 50%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const TitleLabel = styled.h1`
  width: 100%;
  text-align: center;
  color: #0c1545;
  font-size: 17px;
  color: #1000ff7a;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  border: solid 1px #1000ff7a;
  border-radius: 6px;

  & h6 {
    margin-bottom: 0;
    width: 100%;
    text-align: left;
    font-size: 12px;
    color: #1000ff7a;
    font-weight: bold;
    padding-left: 10px;
  }

  & input {
    width: 100%;

    padding: 10px;
    border: none;
    border-bottom: solid 1px #1000ff3b;
    outline: none;
    text-align: justify;
  }
  & textarea {
    height: 100px;
    width: 100%;
    resize: none;
    padding: 10px;
    border: none;
    border: solid 1px #1000ff3b;
    outline: none;
    font-size: 13px;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  width: 80%;
  padding: 8px;
  border: none;
  box-shadow: 2px 2px 2px #00000094;
  color: #ffffff;
  background: #204cb3;
  cursor: pointer;
`;

export const TasksListContainer = styled.div`
  width: 50%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;
`;

export const TasksTableContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: #1000ff3b;
    border-radius: 10px;
  }
`;
export const TasksItemContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  box-shadow: 0px 0px 2px 2px #00000036;
  padding: 5px;
  background: #ffee00ab;
  & h4 {
    margin-bottom: 0;
    font-size: 15px;
    font-weight: bold;
  }

  & p {
    width: 100%;
    height: 100px;
    margin-bottom: 0;
    font-size: 12px;
    word-wrap: break-word;
    overflow-y: auto;
    padding: 5px;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #1000ff3b;
      border-radius: 10px;
    }
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: -8px;
  right: -6px;
  color: #ffffff;
  background: #e60505e3;
  border: none;
  font-size: 8px;
  font-weight: bold;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  padding: 10px;
`;

export const CheckBtn = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  border: none;
  color: #ffffff;
  background: transparent;
  bottom: 5%;
  cursor: pointer;
  box-shadow: 2px 2px 2px #00000014;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
