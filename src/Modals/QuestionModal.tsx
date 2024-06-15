
import "./questionModal.css"
import run from "../DataAccess/Gemini-start"
import { createQuestionObject } from "../App"
import { useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";

export const toggleDisplay = ()=>{
const element =  document.getElementById("questionFormContainer")
   if(element?.classList.contains("displayNone")){
        element?.classList.replace("displayNone","displayFlex")
   }
   else{
    element?.classList.replace("displayFlex","displayNone")
   }
}

export const QuestionModal= ({ setDisplayArray }: { setDisplayArray: React.Dispatch<React.SetStateAction<any[]>> })=>{

    const [loading, setLoading] = useState(false);

         const handleSubmit = async (event:any)=>{
            setLoading(true)
            event.preventDefault()
            let formData = new FormData(event.target)
           
                if(formData.get("topic")){

                        try{
                   let data = await run(formData.get("topic") as string)
                    let obj = createQuestionObject(data)
                    setDisplayArray(prev => [...prev,obj])
                        }
                        catch(error:any){
                                alert("Erro ao enviar dados do modal para API")

                        }
                        finally{
                                setLoading(false)
                        }

                }
                else{
                    alert("Preencha todos os campos!")
                }
        }

       


    return(
       <div>
        <div className="loadingIconContainer" >
        <ClipLoader   loading={loading} color="#3A86FF" speedMultiplier={1}/>
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

