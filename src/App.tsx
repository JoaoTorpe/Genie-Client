
import './App.css'
import { QuestionModal } from './Modals/QuestionModal';
import { toggleDisplay } from './Modals/QuestionModal';
import { getAllQuestions, getInsights } from './DataAccess/ApiAccess';
import { ReactNode, useEffect, useState } from 'react';
import Question from './Components/Question';
import {Question as QuestionModel} from "./Models/Question"
import { Header } from './Models/Header';
import { Statement } from './Models/Statement';
import { Option } from './Models/Option';
import { clearStorage } from './DataAccess/Storage';
import { Doughnut} from 'react-chartjs-2';
import { Chart, ArcElement,Tooltip,Legend } from 'chart.js'
Chart.register(ArcElement,Tooltip,Legend);


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
class InsightsData{
    total:number
    right:number
    wrong:number
    
    constructor(total:number,right:number,wrong:number){
        this.total = total
        this.right = right
        this.wrong = wrong

    }
}

 function App() {

    const [displayArray, setDisplayArray] = useState<any[]>([]);
    const [loadDisplay, setLoadDisplay] = useState<boolean>(false);
    const [insightsData,setInsightsData] = useState<InsightsData>(new InsightsData(0,0,0))
    useEffect(() => {
        async function fetchData() {
            try {
                let insights = await getInsights()
                setInsightsData(new InsightsData(insights.total,insights.right,insights.wrong))
                let fetchedData = await getAllQuestions()
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
    <button onClick={toggleDisplay} className='createQuestion'>+</button>
    <button onClick={handleLogout}  className='LogoutBtn' >Logout</button>
    <button onClick={toggleDisplay} className='showChart' >📈</button>
    <QuestionModal setLoadDisplay={setLoadDisplay}/>
    { displayArray.length ===0? <Empty />:""}
    <div className='questionsContainer'>
    {displayArray.map((e):ReactNode=>{
     return  <Question setLoadDisplay={setLoadDisplay} setDisplayArray={setDisplayArray} question={e} />
    })  }
    </div>

        <div className='chartContainer displayNone' >
        <Doughnut data={{
            labels:['Acertos','Erros'],
            datasets:[
                {      
                    
                  data:[insightsData.right,insightsData.wrong],
                  backgroundColor:[
                    "rgba(43,63,229)",
                    "rgba(253,135,135)"

                  ],
                  borderRadius:10,
                }
            ]
            }} />
            <div className='insightsDetails' >
            <p>Total: {insightsData.total}</p>
            <p>Acertos: {insightsData.right}</p>
            <p>Erros: {insightsData.wrong}</p>
            <p>Precisão: {Math.floor( (insightsData.right / insightsData.total)*100)}%</p>
            </div>
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
