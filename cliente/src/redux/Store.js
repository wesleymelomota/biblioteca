import {configureStore} from '@reduxjs/toolkit'
import Slice from './CreateSlice'

export default configureStore({
    reducer: {
        Ebook: Slice
    }
})

 