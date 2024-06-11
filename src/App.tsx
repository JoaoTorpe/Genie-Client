
import './App.css'
import { QuestionModal } from './Modals/QuestionModal';
import { toggleDisplay } from './Modals/QuestionModal';
import { getAllQuestions } from './DataAccess/ApiAccess';
import { ReactNode, useEffect, useState } from 'react';
import Question from './Components/Question';
import {Question as QuestionModel} from "./Models/Question"
import { Header } from './Models/Header';
import { Statement } from './Models/Statement';
import { Option } from './Models/Option';
 function App() {

    const [displayArray, setDisplayArray] = useState<any[]>([]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                let fetchedData = await getAllQuestions();
                let tempArray:any[] = []
                fetchedData.map((e:any)=>{
                    
                let isQuestionCorrect = e.correct    
                let id = e.id
                let header = new Header(e.subject,e.topic,e.difficulty)
                let statement = new Statement(e.command)

                let optionsArray:any[] = []
                e.answersList.forEach((e:any)=>{
                    let newOption = new Option(e.texto,e.correta,id)
                    optionsArray.push(newOption)
                })

                let hint = e.tip
                let solve = e.resolution
                    let newQuestionObject = new QuestionModel(header,statement,optionsArray,hint,solve,id,isQuestionCorrect)
                    tempArray.unshift(newQuestionObject)
                    

               })

               setDisplayArray(tempArray)
               

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
return (
<div id='mainPage' >
    <button onClick={toggleDisplay} id='createQuestion'>+</button>
    <QuestionModal/>
    <div className='questionsContainer'>
    {displayArray.map((e):ReactNode=>{
       return  <Question question={e} />
    })  }
    </div>

</div>
);
}





export default App
