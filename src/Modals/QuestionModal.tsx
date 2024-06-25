
import "./questionModal.css"
import run from "../DataAccess/Gemini-start"
import { useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";

export const toggleDisplay = (event:any)=>{
    let element
    if(event.target.classList.contains("createQuestion")){
         element =  document.getElementById("questionFormContainer")
         console.log(element)
    }
    else if(event.target.classList.contains("showChart")){
        element =  document.querySelector(".chartContainer")
        console.log(element)
    }


   if(element?.classList.contains("displayNone")){
        element?.classList.replace("displayNone","displayFlex")
   }
   else{
    element?.classList.replace("displayFlex","displayNone")
   }
}

interface props{
    setLoadDisplay :  React.Dispatch<React.SetStateAction<boolean>>

}

export const QuestionModal: React.FC<props>= ({setLoadDisplay})=>{

    const [loading, setLoading] = useState(false);

         const handleSubmit = async (event:any)=>{
            setLoading(true)
            event.preventDefault()
            let formData = new FormData(event.target)
           
                if(formData.get("topic")){

                        try{
                    await run(formData.get("topic") as string)
                   
                        }
                        catch(error:any){
                                alert("Erro ao enviar dados do modal para API")

                        }
                        finally{
                                setLoading(false)
                                setLoadDisplay(prev => !prev)
                        }

                }
                else{
                    alert("Preencha todos os campos!")
                }
        }

       
        const LoadStyle: React.CSSProperties = {
            marginTop:'40px'
        }


    return(
       <div>
        <div className="loadingIconContainer" >
        <ClipLoader cssOverride={LoadStyle} loading={loading} color="#3A86FF" speedMultiplier={1}/>
        </div>
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
        </div>
    );

}

