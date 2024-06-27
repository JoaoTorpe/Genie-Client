import axios from "axios";
import { setItem } from "../DataAccess/Storage";


const apiUrl = import.meta.env.VITE_API_URL
export async function  registerUser(userData:any){

    try{
    const res = await axios.post(apiUrl+"users/register",userData)
        if(res.status === 200){
            location.href = location.href.replace("register","login")
        }
    }
    catch(error:any){
        alert("Usuario já existe no sistema")

    }
}

export async function login(userData:any) {

    try{
        const res = await axios.post(apiUrl+"users/login",userData)
        if(res.status === 200){
            let token = res.data.token
            setItem(token)
           location.href = location.href.replace("login","")
           
        }
        
        
    }
    catch(erro:any){
        alert("Falha ao logar")
    }
    

}



