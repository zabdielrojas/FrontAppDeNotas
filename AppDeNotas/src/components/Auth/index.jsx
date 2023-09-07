import Button from "../Button";
export const Auth = ()=>{
const user = false;

  if(user){
    return (<nav>
              <link>cerrar sesión</link>
            </nav>)
  } 

    return(
    <nav className="auth-nav">
      <ul className="auth-ul">
        <li className="auth-li"><Button handleOnClick={""} text={"Registro"} /></li>
        <li className="auth-li"><Button handleOnClick={""} text={"Acceso"} /></li>
      </ul>
    </nav>
    )
}
export default Auth