import './cad.css'
import Main from '../main/Main'
import Formulario from '../form/Formulario'

export default () => {
    return(
        <Main>
            <div className="cad">
                <div className="titulo">
                    <h1>Cadastrar livro</h1>
                </div>
                <Formulario/>
            </div>
        </Main>
    )
}