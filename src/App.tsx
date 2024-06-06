
import './App.css'
import "./App.css"
import { QuestionModal } from './Modals/QuestionModal';
import { toggleDisplay } from './Modals/QuestionModal';
 function App() {

return (
<div id='mainPage' >
    <button onClick={toggleDisplay} id='createQuestion'>+</button>
    <QuestionModal/>


</div>
);
  
}

export default App
