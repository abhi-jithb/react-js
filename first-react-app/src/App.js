import './App.css';
import ClassComponents from './pages/ClassComponent';
import FunctionComponent from './pages/FunctionComponent';
import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
function App() {
  const author="Abhi";
  const [name,setName] = useState("Abhijth");
  return (
    <Routes>
      <Route path='/' element={<ClassComponents/>}/>
      <Route path='/functional-Component' element={<FunctionComponent
      name={name}
    age={10}
  author={author}
setName={setName}
/>}/>
   </Routes>
    
  );
}

export default App;
