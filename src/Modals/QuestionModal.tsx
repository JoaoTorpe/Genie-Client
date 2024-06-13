
import "./questionModal.css"
import run from "../DataAccess/Gemini-start"

export const toggleDisplay = ()=>{
const element =  document.getElementById("questionFormContainer")
   if(element?.classList.contains("displayNone")){
        element?.classList.replace("displayNone","displayFlex")
   }
   else{
    element?.classList.replace("displayFlex","displayNone")
   }
}

export const QuestionModal= ()=>{

         const handleSubmit = async (event:any)=>{
            event.preventDefault()
            let formData = new FormData(event.target)
            alert("Gerando Questão.....")
                if(formData.get("topic")){
                    run(formData.get("topic") as string)
                }
                else{
                    alert("Preencha todos os campos!")
                }
        }

       


    return(
        <div id="questionFormContainer" className="displayNone" >

            <form id="questionForm" onSubmit={handleSubmit} >
            
           

            <input list = "topics" name="topic" />

            <datalist id="topics" >
            <option value="Juros simples"/>
            <option value="Juros Compostos"/>
            <option value="Regra de três simples"/>
            <option value="Regra de três composta"/>
            <option value="Adição"/>
            <option value="Subtração"/>
            <option value="Divisão"/>
            </datalist>
        <button id="generateQuestionButton" type="submit" >Gerar</button>

            </form>

        </div>

    );

}

