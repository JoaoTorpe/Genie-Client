import "./Modals.css"
import {registerUser} from "../Services/AuthService"

export const RegisterModal =()=>{
const handleSubmit = async (event:any)=>{
    event.preventDefault()
    const formData = new FormData(event.target);
    let userData = {
        email:formData.get("email"),
        password:formData.get("password"),
        name:formData.get("name")
    }
    
    registerUser(userData)

}
    

return (
<div className="formContainer" onSubmit={handleSubmit} >

<form id="registerForm" >
<input name="name" placeholder="Nome" type="text" className="formInput" id="registerName"/>
<input name="email" placeholder="Email" type="text" className="formInput" id="registerEmail"/>
<input  name="password" placeholder="Senha" type="password" className="formInput" id="registerPassword"/>
<button className="submitButton" type="submit" >Registrar</button>
<span><p>Já possui conta?</p><a href="/login">Acessar</a></span>
</form>

</div>

);
}

