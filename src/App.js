import logo from './logo.svg';
import './App.css';
import { useState ,useRef, useCallback} from 'react';
import TodoList from './TodoList'
import ToDoInsert from './ToDoInsert'



function App() {

  let post = '강남 우동 맛집';

  const [todos, setTodos] = useState([
    {
      id : 1,
      text: '리액트 기초 알아보기',
      checked: true
    },
    {
      id : 2,
      text: '컴포넌트 스타일링 하기',
      checked: true
    },
    {
      id : 3,
      text: '투두리스트 만들기',
      checked: false
    }
  ])

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked} : todo,
          ),
      )
    },
    [todos],
  )

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
      nextId.current++; //nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  )
  

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      <h4 style={ {color : 'red', fontSize : '16px'}}>{post}</h4>
        <ToDoInsert onInsert={onInsert} />
        <TodoList
          todos={ todos }
        />
    </div>
  );
}

export default App;
