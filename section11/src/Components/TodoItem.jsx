import { memo, useContext } from 'react';
import './TodoItem.css';
import { TodoContext } from '../App';

function TodoItem({id,isDone,content,date}){
  
  const {onUpdate,onDelete} = useContext(TodoContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
    console.log("체크");
  }

  const onClickDeleteButton = () => {
    onDelete(id);
    console.log("삭제");
  };

  return(
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox"/>
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

// 고차 컴포넌트 ( HOC )
// export default memo(TodoItem,(prevProps,nextProps)=>{
//   // 반환값에 따라, PRops가 바뀌었는지  안바뀌었는 지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O

//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;

//   return true;

// });

export default memo(TodoItem);