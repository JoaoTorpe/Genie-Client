
import './App.css'
import Question from './Components/Question'
import { Question as QuestionModel } from './Models/Question'
import { Header } from './Models/Header'
import { Option } from './Models/Option'
import "./App.css"
import {data} from "./DataAccess/Mock"
import { Statement } from './Models/Statement'
import { ReactNode } from 'react'
import run from './DataAccess/Gemini-start'
import { questionsDataCollection } from './DataAccess/Gemini-start'
function App() {
let questions: QuestionModel[] = []
questionsDataCollection.forEach(e => createQuestionObject(e,questions))
run("Matematica","Juros simples","Facil")

  return (
    <div className='questionsContainer'>
   {questions.map((e):ReactNode=>{return <Question question={e}/>})}

   </div>
   
  )
}

function createQuestionObject(data:any,questions:QuestionModel[]){
//Montando Header
let header = new Header(data.materia,data.assunto,data.dificuldade)
//Montando as options
let options:Option[] = []
data.alternativas.forEach((e: any) => {
  let newOption = new Option(e.texto,e.correta?true:false)
  options.push(newOption)
})
//Montando o statement
let statement = new Statement(data.enunciado)
//Montando a questao
let question = new QuestionModel(header,statement,options,data.dica,data.resolucao)

questions.push(question)

}

export default App
