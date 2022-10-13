import React, { useEffect } from "react";

const ButtonMemoComponent = React.memo((props:any) => {
    console.log("child render");
    
    return (
      <>
        <h4>List My Todos - {props.approch}</h4>
        <p>[</p>
        {props.todos.map((todo: string | null | undefined, index: number | null | undefined) => {
          return <p key={index}>{todo}</p>;
        })}
        <p>]</p>
        <button onClick={props.addTodo}> Child- Add Todo</button>
      </>
    );
});

export default ButtonMemoComponent;
