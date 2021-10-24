import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'; 
import { isNamedExports } from 'typescript';

const AddToDo: React.FC<{ addTodo: Function }> = ({addTodo}) => { // Hint: what must get passed into props here?

    
    const [inputText, setInputText] = useState('');

    /* Todo: define any necessary functions or variables... 
        May depend on your implementation. */
    //const [completed, setCompleted] = useState(false);

    const [name, setName] = useState('THIS WILL CHANGE WHEN YOU USE THE FORM');
    //const [completed, setCompleted] = useState(false);

    // const random = () => {
    //     addTodo()
    // }

    const submission = (e : any) => {
        e.preventDefault();
        addTodo(name); 
    }

    return (
        <div>
            <form onSubmit={submission}>
                <h1>Todo List</h1>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} /><br />
                {/* Lol:
                <input type="text" name="name" /><br />
                O:
                <input type="text" name="name" /><br />
                S:
                <input type="text" name="name" /> */}
                {/* <button type="submit" id="Button" style={{height : "100px"}}>SUBMIT</button>  */}
                <input type="submit" id="Button" value="SUBMIT"/>
            </form>
        </div>
    );
}

// function AddToDo() {
//     const [name, setName] = useState('THIS WILL CHANGE WHEN YOU USE THE FORM');
//     const [completed, setCompleted] = useState(false);

//     return (
//         <div>
//             <form onSubmit={() => setCompleted(true)}>
//                 <h1>{name}</h1>
//                 <input type="text" name="name" onChange={(e) => setName(e.target.value)}/><br/>
//                 Lol:
//                 <input type="text" name="name" /><br/>
//                 O:
//                 <input type="text" name="name" /><br/>
//                 S:
//                 <input type="text" name="name" />
//                 {/* <button type="submit" id="Button" style={{height : "100px"}}>SUBMIT</button>  */}
//                 <button type="submit" id="button">SUBMIT</button>
//             </form>
//         </div>
//     );
// }

export default AddToDo;
