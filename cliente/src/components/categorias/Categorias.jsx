import './categoria.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Main from '../main/Main'
import Ebook from '../Ebooks/Ebook'
import { useEffect, useState } from 'react'

export default () => {

    document.title = 'Categorias'

    const {categoria} = useParams()
    const BaseUrl = `http://localhost:8081/categoria/${categoria}`
    const [categorias, setCategoria] = useState([])
    
    useEffect(() => {
        axios.get(BaseUrl)
            .then(({data}) => setCategoria(data.Ebook))
    }, [categoria])

    const renderEbook = () => {
        return categorias.map((ebook) => {
            return <Ebook key={ebook._id} autor={ebook.autor} titulo={ebook.titulo} sinopse={ebook.sinopse} />
        })
    }
    
    return(
        <Main>
            <div className="categoria">
                {renderEbook()}
            </div>
        </Main>
    )
}