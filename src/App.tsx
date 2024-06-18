
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
import { clearStorage } from './DataAccess/Storage';



export const createQuestionObject = (e:any)=>{

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
        return new QuestionModel(header,statement,optionsArray,hint,id,isQuestionCorrect)
        

}


 function App() {

    const [displayArray, setDisplayArray] = useState<any[]>([]);
    const [loadDisplay, setLoadDisplay] = useState<boolean>(false);
    
    useEffect(() => {
        async function fetchData() {
            try {
                let fetchedData = await getAllQuestions();
                let tempArray:any[] = []
                fetchedData.map((e:any)=>{
                  let newObj =  createQuestionObject(e)
                tempArray.push(newObj)

               })
               setDisplayArray(tempArray)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [loadDisplay]);

const handleLogout = ()=>{
    clearStorage()
    location.reload()
}


return (
<div id='mainPage' >
    <button onClick={toggleDisplay} id='createQuestion'>+</button>
    <button onClick={handleLogout}  className='LogoutBtn' >Logout</button>
    <QuestionModal setLoadDisplay={setLoadDisplay}/>
    { displayArray.length ===0? <Empty />:""}
    <div className='questionsContainer'>
    {displayArray.map((e):ReactNode=>{
       return  <Question setLoadDisplay={setLoadDisplay} setDisplayArray={setDisplayArray} question={e} />
    })  }
    </div>

</div>
);
}

const Empty = ()=>{
    return (
        <div className='empty' >
            <span>😑</span>
            <h1>Você não possui questões.</h1>
            <h3>Adicione uma questão!</h3>
        </div>
    )
}



export default App
