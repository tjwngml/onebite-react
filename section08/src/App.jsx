
import { useState, useRef } from 'react'
import './App.css'
import Editor from './Components/Editor'
import Header from './Components/Header'
import List from './Components/List'

  const mockData =[
    {
    id:0,
    isDone : false,
    content :"React 공부하기",
    date : new Date().getTime(),
  },
   {
    id:1,
    isDone : false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
   {
    id:2,
    isDone : false,
    content :"노래 연습하기",
    date : new Date().getTime(),
  },
];

function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3)

  const onCreate = (content)=>{
    const newTodo = {
      id : idRef.current++,
      inDone : false,
      content: content,
      date : new Date().getTime()
    }

    setTodos([newTodo,...todos]);

  }


  return (
    <div className='App'>
    <Header/>
    <Editor onCreate={onCreate}/>
    <List todos={todos}/>
    </div>
  );
}

export default App;
