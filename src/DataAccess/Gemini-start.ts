
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY)

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export let questionsDataCollection: any[]=[]

 async function run(difficulty:string , subject:string,mainSubject:string ) {
    const prompt = `const prompt = ' {"materia":"matematica",
    "assunto":"juros",
    "dificuldade":"facil",
       "enunciado": "Ana decidiu investir R$ 1.500,00 em um aplicativo de renda fixa que oferece juros simples de 1% ao mês. Quantos reais ela receberá após 6 meses de investimento?",
       "alternativas": [
         { "texto": "R$ 1.590,00", "correta": true },
         { "texto": "R$ 1.650,00" },
         { "texto": "R$ 1.710,00" },
         { "texto": "R$ 1.800,00" }
       ],
       "dica": "Para resolver este problema, podemos utilizar a regra de três simples, que estabelece uma proporcionalidade entre duas grandezas.",
       "resolucao": [
         "**Etapa 1: Montar a proporção.**",
         "Metros de muro | Tempo (horas)",
         "------- | --------",
         "8 | 6",
         "12 | x",
         "**Etapa 2: Multiplicar os termos na diagonal.**",
         "8 * x = 6 * 12",
         "**Etapa 3: Resolver para x.**",
         "x = (6 * 12) / 8",
         "x = 9",
         "**Etapa 4: Responder à pergunta.**",
         "O pedreiro levará **9 horas** para construir 12 metros de muro."
       ]

     }' 
     ESTRITAMENTE de acordo com esse modelo crie uma questao de 
     `+subject+` sobre `+mainSubject+`de dificuldade`+difficulty+`Sega exatamente o modelo e retorne uma resposta em json ,retorne sem utilizar markdown apenas a string pura, nao retorne nada alem disso`
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
     let newQuestionData = JSON.parse(text)
     questionsDataCollection.push(newQuestionData)
    console.log(newQuestionData);
   
  }

export default run
 