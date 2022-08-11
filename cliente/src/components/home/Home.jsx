import { useState, useEffect } from 'react'
import axios from 'axios'
import Ebook from '../Ebooks/Ebook'
import Main from '../main/Main'
import './home.css'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setEbook, getEbooks} from '../../redux/CreateSlice'

export default () => {
    document.title = 'Home'
    const [ebook, setebook] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:8081/listarEbooks')
            .then(({data}) => setebook(data.ebooks))
    },[ebook])

    useEffect(() => {
        dispatch(getEbooks({ebooks: ebook}))
    },[ebook])

    const excluir = async (id) => {
        const confirmar = window.confirm('excluir ?')
        if(confirmar === true){
            const baseUrl = `http://localhost:8081/deleteEbook/${id}`
            const {data} = await axios.delete(baseUrl)

        }

    }
    
    const renderEbook = () => {
        return ebook.map((ebooks) => {
            return(
                <div>
                    <Ebook autor={ebooks.autor} ebook={ebooks} titulo={ebooks.titulo} sinopse={ebooks.sinopse}/>
                    <div className="acoes">
                        <div className="btns">
                            
                            <button type="button" onClick={() => excluir(ebooks._id)} className="btn btn-danger">Excluir</button>
                            <Link to={`/update/${ebooks._id}`}>
                                <button type="button" className="btn btn-primary m-3">Editar</button>
                            </Link>
                        </div>
                        
                        </div>
                    </div>
            )
        })
    }

    return (
        <Main>
            <div className="home">
                <div className="into">
                    <h1>Biblioteca</h1>
                    <h4>Livros Inseridos</h4>
                    
                </div>
                <div className="conteudos">
                    {renderEbook()}
                </div>
            </div>
        </Main>
    )
}