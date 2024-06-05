import axios from "axios";

async function  registerUser(userDataString:any){
let apiUrl = import.meta.env.VITE_API_URL
    try{
    const res = await axios.post(apiUrl+"users/register",userDataString)
        if(res.status === 200){
            location.href = location.href.replace("register","login")
        }
    }
    catch(error:any){
        alert("Usuario já existe no sistema")

    }



}


export default registerUser