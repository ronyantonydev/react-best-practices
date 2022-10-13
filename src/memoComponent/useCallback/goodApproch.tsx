import { useCallback, useState } from "react";
import ButtonMemoComponent from "./buttonComponent";

const UseCallbackGoodApproch: React.FC<{}> = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([""]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
      setTodos((t) => [...t, "{New Todo},"]);
    }, [todos]);
  
    return (
      <>
        <ButtonMemoComponent todos={todos} addTodo={addTodo} approch= "Good Approch" />
        <hr />
        <div>
          <button onClick={increment}>Parent ++</button>
          - Count: {count}
        </div>
        <hr />
      </>
    );
}
export default UseCallbackGoodApproch;
