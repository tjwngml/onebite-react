import { use, useState , useRef ,useContext} from "react";
import "./Editor.css";
import { TodoStateContext } from "../App";

const Editor = () => {
  
  const {onCreate} = useContext(TodoStateContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if(e.keyCode === 13)
    {onSubmit();}

  };

  const onSubmit = () =>{
    if(content === ""){
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
};

  return(
    <div className="Editor">
      <input ref={contentRef}
      onKeyDown={onKeydown} 
      value={content}
      onChange={onChangeContent}
      placeholder="새로운 Todo..."/>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;