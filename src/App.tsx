import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import styled from 'styled-components';
type TodoLists = {
  id: number;
  title: string;
  text: string;
  isDone: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoLists[]>([
    {
      id: 1,
      title: '화이팅',
      text: '타입스크립트',
      isDone: false,
    },
    {
      id: 2,
      title: '화이22팅',
      text: '타입스크22립트',
      isDone: true,
    },
  ]);

  return (
    <div className="App">
      <Header>TodoList-Typescript</Header>
      <main>
        <InputForm />
        <TodoItem>
          {todos.map((item) => (
            <Todos>
              <div>{item.title}</div>
              <div>{item.text}</div>
            </Todos>
          ))}
        </TodoItem>
      </main>
    </div>
  );
}

export default App;

const TodoItem = styled.div`
  display: flex;
  gap: 16px;
`;

const Todos = styled.div`
  border: 1px solid;
  padding: 1em;
`;
