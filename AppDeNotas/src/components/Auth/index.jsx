export const Auth = ()=>{
const user = false;

  if(user){
    return (<nav>
              <link>cerrar sesión</link>
            </nav>)
  } 

    return(
    <nav>
      <ul>
        <li>registro</li>
        <li>acceso</li>
      </ul>
    </nav>
    )
}
export default Auth