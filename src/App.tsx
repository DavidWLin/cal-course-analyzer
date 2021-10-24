import React from 'react';
import logo from './logo.svg';
import './App.css';
import './AdvanceSearch.css';

import Header from './Header';
import AddToDo from './AddToDo'; 
import { TodoItem } from './TodoItem';

import TodoInterface from './TodoInterface';
import Data from "./mock-data.json";
import ClassInfo from './ClassInfo';

// import { PropertyControls, ControlType, Frame } from "framer";

function App() {
  const arr : TodoInterface[] = []; 
  const [todoArray, setTodoArray] = React.useState(arr);
  const [index, setIndex] = React.useState(0);

  const [query, setQuery] = React.useState("");

  let addTodo = (title: string) => {
    //add to the todoArray 
    console.log('INDEX ' + index + "\n");
    var newTodo : TodoInterface = {
      title : title,
      completed : false,
      index  
    };
    setIndex(index + 1);  
    //todoArray.push(newTodo); 
    
    setTodoArray(todoArray.concat(newTodo)); 
  }

  let deleteToDo = (index: number) => {
    console.log("LOG MESSAGE\n"); 
  
    //todoArray.splice(index, 1); 
    setTodoArray(todoArray.filter(todo => todo.index !== index));
  }

  // const todoItems : TodoItem[] = []; 
  // for ()

  // const filterData = () => {
  //   return (
  //     <div>
  //       {
  //         Data.filter(post => {
  //           if (query === '') {
  //             return post;
  //           } else if (post.class_name.toLowerCase().includes(query.toLowerCase())) {
  //             return post;
  //           }
  //         }).map((post) => (
  //           <div key={post.id}>
  //             <p>{post.first_name} {post.last_name}</p>
  //           </div>
  //         ))
  //       }
  //     </div>
  //   )
  // }
      
  return (     //asdfasdf
    <div className="App">
      <Header/> 
      {/* <AddToDo addTodo={addTodo}/>
      {todoArray.map((todoelem, index) => <TodoItem todoItem={todoelem} deleteToDo={deleteToDo}/>)} */} 
      {/* <p key={index}>Hello,   {todoelem.title}!</p>)}     */}

      {/*have a mapping from rating number to color!!!*/}

      <div className="Card">
        <div className="CardInner">
          <label>Search for your class!</label>
          <div className="container">
            <div className="Icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
            <div className="InputContainer">
              <input placeholder="Enter Course Number" onChange={event => setQuery(event.target.value)} />
            </div>
          </div>
        </div>
      </div>

      {/* <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} /> */}
      <div>
        {
          Data.filter(post => {
            if (query === '') {
              return post;
            } else if (post.class_name.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          }).map((post) => (
            <ClassInfo post={post}/>
            // <div key={post.class_name}>
              
            // </div>
          ))
        }
      </div>


      {/* <button onClick={filterData}>
        Search!
      </button> */}
      
    </div>
  );
}

export default App;
