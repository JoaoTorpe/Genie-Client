import axios from "axios"
import { getItem } from "./Storage"

const bearer={
    headers: { Authorization: getItem()}
  }

export async function postQuestion(newQuestionData:any){

    
    
        try{
       let res =  await axios.post(import.meta.env.VITE_API_URL+"questions",newQuestionData,bearer)
          
       console.log(res.data)
    location.reload()
        }
        catch(error:any){
          alert("Falha ao salvar questão")
    
        }
    
      }

      export async function getAllQuestions() {


        
        try{
            let res =  await axios.get(import.meta.env.VITE_API_URL+"questions",bearer)

            return res.data

        }

        catch(error:any){
            alert("Erro ao buscar questoes no banco de dados")
        }

      }

