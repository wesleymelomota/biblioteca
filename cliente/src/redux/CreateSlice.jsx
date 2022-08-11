import {createSlice} from '@reduxjs/toolkit'

export const Slice = createSlice({
    name: 'Ebook',
    initialState: {

        ebook: {
            titulo: '',
            autor: '',
            sinopse: '',
            categoria: ''},
        ebooks: []
    },
    reducers: {
        setEbook(state, {payload}){
            return {...state, ebook: payload}
        },
        getEbooks(state, {payload}){
            return{...state, ebooks: payload}
        }
    }
})

export const {setEbook, getEbooks} = Slice.actions
export default Slice.reducer