import './ebook.css'

export default ({titulo, sinopse, autor, ebook}) => {

    

    return(
        <div className={`ebook `}>
            <div className="titulo">
                <h3>{titulo}</h3>
            </div>
            <div className="autor">
                 <h5>{autor}</h5>
            </div>
            <div className="sinopse">
                <hr/>
                <p>{sinopse}</p>
            </div>
            
        </div>
    )
}