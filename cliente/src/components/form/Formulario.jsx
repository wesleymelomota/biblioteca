import './form.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default ({obj}) => { 
    
    const [Ebook, setEbook] = useState({
        titulo: '',
        autor: '',
        sinopse: '',
        categoria: ''
    })
    
    useEffect(() => {
        if(obj){
            setId(obj[0]._id)
            setTitulo(obj[0].titulo)
            setAutor( obj[0].autor)
            setSinopse(obj[0].sinopse)
            setCategoria(obj[0].categoria)
        }
    }, [])
    
    const [_id, setId] = useState()
    const [titulo, setTitulo] = useState()
    const [autor, setAutor] = useState()
    const [sinopse, setSinopse] = useState()
    const [categoria, setCategoria] = useState()
    
    const UrlPost = `http://localhost:8081/ebook/add`
    const UrlPut = `http://localhost:8081/updateEbook/${_id}`
    
    const save = async () => {
        const method = _id ? 'put' : 'post'
        const BaseUrl = _id ? `${UrlPut}`: UrlPost
        setEbook({titulo, autor, sinopse, categoria})
        const {data} = await axios[method](BaseUrl, {titulo, autor, sinopse, categoria})
        const msg = data.msg
        alert(msg)
        clear()
       
    }

    const clear = () => {
        setTitulo('')
        setAutor('')
        setSinopse('')
        setCategoria('')
    }
    
    return(
        <>
        <div className="form row g-3">
            <div className='col-md-6'>
                <label className="form-label">Titulo: </label>
                <input type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="form-control"/>
            </div>
            <div className='col-md-6'>
                <label className="form-label">Autor: </label>
                <input type="text" name="autor" value={autor} onChange={(e) => setAutor(e.target.value)} className="form-control"/>
            </div>
            <div className='col-md-6 mb-3'>
                <label className="form-label">Sinopse: </label>
                <input type='text' name="sinopse" value={sinopse} onChange={(e) => setSinopse(e.target.value)} className="form-control"/>
            </div>
            <div className='col-md-6 mb-3'>
                <label className="form-label">Categoria: </label>
                <input type='text' name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} className="form-control"/>
            </div>
            
        </div>
            <div className="btns">
                <button type="button" onClick={() => save()} className="btn btn-success">Salvar</button>
                <button type="button" onClick={() => clear()} className="btn btn-secondary m-2">Cancelar</button>
            </div>

        </>
    )
}