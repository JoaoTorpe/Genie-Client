import React from "react";
import "./Statement.css"
interface StatementProps{
    text:String
}

const Statement : React.FC<StatementProps> = ({text}) =>{

return (
<div  className="statementTextContainer">
    <h2>{text}</h2>
</div>

);

}


export default Statement