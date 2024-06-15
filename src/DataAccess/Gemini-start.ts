
import { GoogleGenerativeAI } from "@google/generative-ai"
import { postQuestion } from "./ApiAccess";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY)

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});



 async function run(topic:string ) {
    try{

    const prompt = ` {
    "assunto":"conteudo abordado",
    "enunciado": "Enunciado da questao",
    "alternativas": [
        { "texto": "alternativa 1", "correta": true },
        { "texto": "alternativa 2","correta": false },
        { "texto": "alternativa 3","correta": false },
        { "texto": "alternativa 4","correta": false }
    ],
    "dica": "Dica simples direta e com no maximo 4 linhas"
}
     usando esse json como exemplo crie uma questao de 
     matematica`+` sobre `+topic+`Siga exatamente o modelo e retorne uma resposta em json ,
     retorne sem utilizar markdown apenas a string pura, nao retorne nada alem disso.evite repetir os numeros e nomes da questao anterior `
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
     let newQuestionData = JSON.parse(text)
    return postQuestion(newQuestionData)
     
    }
    catch(erro:any){
      alert("Falha ao gerar questão, tente novamente!")
    }

  }

 

export default run
 