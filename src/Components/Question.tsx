import React from "react"
import Header from "./Header"
import Statement from "./Statement";
import Option from "./Option";
import "./Question.css"
import { Question as QuestionModel } from "../Models/Question";
import { ReactNode } from "react";
interface QuestionProps{
    question:QuestionModel
}

const Question: React.FC<QuestionProps> = ({question})=>{
    let options = question.options
    let count =0
    return(
        <div className="question" >
<Header subject={question.header.subject} subjectContent={question.header.subjectContent} difficulty={question.header.difficulty} /> 
<Statement text = {question.statement.text}/>
{options.map((e):ReactNode=>{
    count +=1
    return <Option answer={e.answer} letterNumber={count} correct={e.correct} />
})}
</div>
    );
} 


export default Question