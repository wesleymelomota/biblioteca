import Main from "../main/Main"
import './update.css'
import Formulario from "../form/Formulario"
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default () => {
    const {_id} = useParams()
    const {ebooks} = useSelector(state => state.Ebook.ebooks)
    const ebook = ebooks.filter((obj) => obj._id === _id)
    
    
    return(
        <Main>
            <div className="update">
                <Formulario obj={ebook}/>
            </div>
        </Main>
    )
}