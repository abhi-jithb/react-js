import './App.css';
import ClassComponents from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">

       <p>Classs Component:
       </p>
       <ClassComponents />
       <br/>

       <p>Function Components:</p>
       <FunctionComponent/>
       <FunctionComponent/>

    </div>
  );
}

export default App;
