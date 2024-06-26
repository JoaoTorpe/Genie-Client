
import "./Option.css"
import { putCorrect } from "../DataAccess/ApiAccess"

interface OptionProps{
    answer:string
    letterNumber:number
    correct:Boolean
    questionId:number
    setLoadDisplay :  React.Dispatch<React.SetStateAction<boolean>>
} 


const Option: React.FC<OptionProps> = ({answer,letterNumber,correct,questionId,setLoadDisplay})=>{
let letter:any;

switch (letterNumber) {
    case 1:
      letter = 'A';
      break;
    case 2:
      letter = 'B';
      break;
    case 3:
      letter = 'C';
      break;
    case 4:
      letter = 'D';
      break;
    case 5:
        letter = 'E'
      break

    default:
      letter = 'N/A';
      break;
  }

  async function  handleClick(){
     putCorrect(questionId,correct)
    .then(()=>{
      setLoadDisplay(prev=>!prev)
    })
      
  }

   
return(
<div className="optionBody" data-isCorrect={correct} >
<button onClick={handleClick} >{letter}</button>
<h3>{answer}</h3>
</div>
);
}


export default Option