import React from "react"
import Header from "./Header"
import Statement from "./Statement";



const Question: React.FC = ()=>{
    return(
        <div>
<Header subject="matematica" subjectContent="Porcentagem" dificulty="facil" /> 
<Statement text = "Ana decidiu investir R$ 1.500,00 em um aplicativo de renda fixa que oferece juros simples de 1% ao mês. Quantos reais ela receberá após 6 meses de investimento?"/>
</div>
    );
} 


export default Question