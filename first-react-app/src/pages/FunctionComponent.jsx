import React,{useState} from 'react';

const FunctionComponent = (props)=>{
    const [count,setCount]=useState(0);
return(
    <div>
    <p>This is a functional Component</p>
    <button onClick={()=>setCount(count+1)}>click here to increment</button>
    <button onClick={()=>setCount(count-1)}>Click here to decrement</button>
    <h2>{count}</h2>
    <button onClick={()=>props.setName("Abhijith B")}>click to change name</button>
  

    <h4>MY name is: {props.name} . I'm {props.age} of age. Officially known as {props.author}</h4>
    </div>
) 
}

export default FunctionComponent;