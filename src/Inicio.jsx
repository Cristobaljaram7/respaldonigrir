import "./Inicio.css"
export function Inicio(){
    return (
    <section className="backLine">
        <h1 className="title">Bienvenido</h1>
        <form>
            <label className="letras">
             Email:
                <input className="colorlabel" type="email" name="email" required/>
            </label>
            <label className="letras">
            Clave: 
            <input className="colorlabel" type="password" name="Clave" required/></label>
            <button as={Link } to ="/login" type="submit" color="primary" onClick={handlelogin()}>Entrar</button>
            <input href="../Registro.jsx" className="button" type="submit" value="Register"/>
        </form>
    </section>

    )
}