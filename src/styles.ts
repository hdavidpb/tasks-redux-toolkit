import styled from "styled-components";
interface IProps {
  color: string;
}

export const CounterContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 1rem;
`;

export const Value = styled.h4`
  width: 100%;
  margin-bottom: 0;
  text-align: center;
  font-size: 17px;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
  border-bottom: solid 1px gray;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Button = styled.button`
  width: 20%;
  border: none;
  padding: 6px;
  border-radius: 16px;
  background: ${(props: IProps) => props.color};
  color: #ffffff;
  cursor: pointer;
`;
