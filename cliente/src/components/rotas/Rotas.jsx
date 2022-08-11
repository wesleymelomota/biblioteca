import {Route,  BrowserRouter, Routes} from 'react-router-dom'
import CadEbook from '../cadastro/CadEbook'
import Categorias from '../categorias/Categorias'
import Home from '../home/Home'
import Update from '../update/Update'

export default () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
                
            <Route path='/cadastrar' element={<CadEbook/>}/>
                
            <Route path='/update/:_id' element={<Update/>}/>
            <Route path='/categoria/:categoria' element={<Categorias/>}/>
            
        </Routes>
    )
}