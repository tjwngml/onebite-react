
import { useState, useRef , useReducer ,useCallback ,createContext } from 'react'
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

function reducer(state, action){
  switch(action.type){
    case 'CREATE' : 
    return [action.data, ...state] ;
    case 'UPDATE' : 
    return state.map((item)=>item.id === action.targetId? { ...item, isDone: !item.isDone} : item)
    case 'DELETE' :
    return state.filter((item)=>item.id !== action.targetId);
    default: 
    return state;
  };

}

export const TodoContext = createContext(); // 보통 이렇게 컴퍼넌트 외부에 선언



function App() {

  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content)=>{
   dispatch({
    type : "CREATE",
    data : {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    },
   });
  },[] )


  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId : targetId
    });
},[]);


  const onDelete = useCallback((targetId)=>{
    console.log("삭제1");
     dispatch({
      type: "DELETE",
      targetId : targetId,
    });
  },[]);




  return (
    <div className='App'>
    <Header/>
    <TodoContext.Provider value={{
      todos,
      onCreate,
      onUpdate,
      onDelete,
    }}>
      <Editor />
      <List 
      todos={todos} 
      onUpdate={onUpdate} 
      onDelete={onDelete}/>
    </TodoContext.Provider>
    </div>
  );
}

export default App;

// 1. 기능구현 -> 2. 최적화
// 모든 것들에 최적화 적용 x
// 최적화가 꼭 되어야 할 것 같은 것에만 하기