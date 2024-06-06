import { login } from "../Services/AuthService";
export const LoginModal =()=>{
    const handleSubmit = async (event:any)=>{

        event.preventDefault()

        const formData = new FormData(event.target);
        let userData = {
            email:formData.get("email"),
            password:formData.get("password")
        }

        login(userData)


    }

    return (
    <div className="formContainer" >
    
    <form id="loginForm" onSubmit={handleSubmit} >
    <input name="email" placeholder="Email" type="text" className="formInput" id="registerEmail"/>
    <input name="password" placeholder="Senha" type="password" className="formInput" id="registerPassword"/>
    <button className="submitButton" type="submit" >Acessar</button>
    <span><p>Não possui conta?</p><a href="/register">Registar</a></span>
    </form>
    
    </div>
    
    );
    }
