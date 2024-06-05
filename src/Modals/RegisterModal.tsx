import "./Modals.css"

export const RegisterModal =()=>{

return (
<div className="formContainer" >

<form >
<input placeholder="Nome" type="text" className="formInput" id="registerName"/>
<input placeholder="Email" type="text" className="formInput" id="registerEmail"/>
<input  placeholder="Senha" type="password" className="formInput" id="registerPassword"/>
<button className="submitButton" type="submit" >Registrar</button>
<span><p>Já possui conta?</p><a href="/login">Acessar</a></span>
</form>

</div>

);
}

