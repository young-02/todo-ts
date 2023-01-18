import React, { useState } from 'react';
import styled from 'styled-components';

type TodoValues = {
  title: string;
  text: string;
  isDone: boolean;
};

const InputForm = () => {
  const [todoValue, setTodoValue] = useState<TodoValues>({
    title: '',
    text: '',
    isDone: false,
  });
  const { title, text } = todoValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTodoValue({
      ...todoValue,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo = {
      id: 1,
      title,
      text,
      isDone: false,
    };

    setTodoValue({
      ...todoValue,
      title: '',
      text: '',
    });
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <input name="title" value={title} onChange={handleChange} />
      <input name="text" value={text} onChange={handleChange} />
      <button>추가하기</button>
    </FormWrap>
  );
};

export default InputForm;

const FormWrap = styled.form`
  padding: 2em;
`;
