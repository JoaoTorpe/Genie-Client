
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
                if(formData.get("subject") && formData.get("topic")&&formData.get("difficulty")){
                    run(formData.get("difficulty") as string,formData.get("subject") as string,formData.get("topic") as string)
                }
                else{
                    alert("Preencha todos os campos!")
                }
        }

       


    return(
        <div id="questionFormContainer" className="displayNone" >

            <form id="questionForm" onSubmit={handleSubmit} >
            
            <input list = "subjects" name="subject" />
            <datalist id="subjects" >
            <option value="Matematica"/>
            </datalist>

            <input list = "topics" name="topic" />

            <datalist id="topics" >
            <option value="Juros simples"/>
            <option value="Juros Composts"/>
            <option value="Regra de três simples"/>
            <option value="Regra de três composta"/>
            <option value="Adição"/>
            <option value="Subtração"/>
            <option value="Divisão"/>
            </datalist>
            <div>
            <input type="radio" id="facil" name="difficulty" value="facil"/>
            <label htmlFor="facil">Fácil</label>

            <input type="radio" id="medio" name="difficulty" value="medio"/>
            <label htmlFor="medio">Médio</label>

            <input type="radio" id="dificil" name="difficulty" value="dificil"/>
            <label htmlFor="dificil">Difícil</label>
            </div>
        <button id="generateQuestionButton" type="submit" >Gerar</button>

            </form>

        </div>

    );

}

