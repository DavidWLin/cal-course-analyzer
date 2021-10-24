import TodoInterface from "./TodoInterface"

export const TodoItem: React.FC<{ todoItem: TodoInterface, deleteToDo: (index: number) => void}> = ({ todoItem, deleteToDo}) => {

    //HERE YOU ARE RETURNING A DIV  
    function changeCompleted() {
        todoItem.completed = !todoItem.completed; 
    }

    return (
        <div>
            <text id="cooltext">{todoItem.title} </text>
            {/* <input type="checkbox"  
            checked = {todoItem.completed}
            onClick={() => changeCompleted()}/> */}
            <button onClick={() => deleteToDo(todoItem.index)}>DELETE</button>
            {/* <button onClick={deleteToDo.bind(this, todoItem.index)}> x </button> */}
        </div>
    );
}