import React from "react";
interface StatementProps{
    text:String
}

const Statement : React.FC<StatementProps> = ({text}) =>{

return (
<div id="statementTextContainer">
    <h2>{text}</h2>
</div>

);

}


export default Statement