export const LoginModal =()=>{

    return (
    <div className="formContainer" >
    
    <form >
    <input placeholder="Email" type="text" className="formInput" id="registerEmail"/>
    <input  placeholder="Senha" type="password" className="formInput" id="registerPassword"/>
    <button className="submitButton" type="submit" >Acessar</button>
    <span><p>Não possui conta?</p><a href="/register">Registar</a></span>
    </form>
    
    </div>
    
    );
    }
    