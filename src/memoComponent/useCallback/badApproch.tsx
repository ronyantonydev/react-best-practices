import { useState } from "react";
import ButtonMemoComponent from "./buttonComponent";

const UseCallbackBadApproch: React.FC<{}> = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([""]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "{New Todo},"]);
    };
  
    return (
      <>
        <ButtonMemoComponent todos={todos} addTodo={addTodo} approch= "Bad Approch" />
        <hr />
        <div>
          <button onClick={increment}>Parent++ </button>
          - Count: {count}
        </div>
        <hr />

      </>
    );
}
export default UseCallbackBadApproch;
