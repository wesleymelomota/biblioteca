import './nav.css'
import { Link } from 'react-router-dom'

export default () => {
    const categorias = {
        financa: 'finança',
        historia: 'historia'
    }
    return(
        <nav className="nav">
            <ul>
                <li><Link to='/'>Home</Link></li>
            </ul>
            <ul>
                <li><Link to='/cadastrar'>Cadastrar</Link></li>
            </ul>
            <ul>
            <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                </Link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to={`/categoria/${categorias.financa}`}>Finanças</Link></li>
                <li><Link class="dropdown-item" to={`/categoria/${categorias.historia}`}>Historia</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to="#">Something else here</Link></li>
            </ul>
            </li>
            </ul>
        </nav>
    )
}