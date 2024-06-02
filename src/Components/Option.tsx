
import "./Option.css"

interface OptionProps{
    answer:string
    letterNumber:number
    correct:Boolean
} 


const Option: React.FC<OptionProps> = ({answer,letterNumber,correct})=>{
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

return(
<div className="optionBody" data-isCorrect={correct} >
<button  >{letter}</button>
<h3>{answer}</h3>
</div>
);
}


export default Option