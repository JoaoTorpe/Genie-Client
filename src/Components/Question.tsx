import React from "react"
import Header from "./Header"
import Statement from "./Statement";
import Option from "./Option";
import "./Question.css"



const Question: React.FC = ()=>{
    return(
        <div className="question" >
<Header subject="matematica" subjectContent="Porcentagem" dificulty="facil" /> 
<Statement text = "Ana decidiu investir R$ 1.500,00 em um aplicativo de renda fixa que oferece juros simples de 1% ao mês. Quantos reais ela receberá após 6 meses de investimento?"/>
<Option answer="R$ 1.590,00" letterNumber={1} correct={true} />
<Option answer="R$ 1.590,00" letterNumber={2} correct={true} />
<Option answer="R$ 1.590,00" letterNumber={3} correct={true} />
<Option answer="R$ 1.590,00" letterNumber={4} correct={true} />
</div>
    );
} 


export default Question