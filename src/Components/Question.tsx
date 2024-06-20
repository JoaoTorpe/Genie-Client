import React from "react"
import Header from "./Header"
import Statement from "./Statement";
import Option from "./Option";
import "./Question.css"
import { Question as QuestionModel } from "../Models/Question";
import { ReactNode } from "react";
interface QuestionProps{
    question:QuestionModel
    setDisplayArray: React.Dispatch<React.SetStateAction<any[]>>
    setLoadDisplay :  React.Dispatch<React.SetStateAction<boolean>>
}

const Question: React.FC<QuestionProps> = ({ question,setLoadDisplay })=>{
    let options = question.options
    let count =0
    return(
        <div className="question" >
<Header subject="Matematica" topic={question.header.subjectContent}  /> 
<Statement text = {question.statement.text}/>
{options.map((e):ReactNode=>{
    count +=1
    return <Option  setLoadDisplay={setLoadDisplay} answer={e.answer} letterNumber={count} correct={e.correct} questionId={e.questionId} />
})}

{<Span correct={question.correct} /> }

</div>
    );
} 

interface spanProp{

    correct:boolean

}

const Span:React.FC<spanProp> = ({correct})=>{

    if(correct === true){
        return <span className="correct" >Correto</span>
    }
    else if(correct === false){
        return  <span className="wrong" >Errado</span>
    }
    else{
        return  <span className="" ></span>
    }

}

export default Question