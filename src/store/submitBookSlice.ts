import { createSlice, PayloadAction, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllBooks} from './bookSlice'


export interface bookDetailsInitialState {
    books: {} | null
    isLoading:boolean
    isError:boolean
}

const initialState: bookDetailsInitialState = {
    books:null,
    isLoading:true,
    isError:false

}

export const addBook = createAsyncThunk('book/addBook',async(payload) => {
    const body = {
        'title':payload.title,
        'author':payload.author,
        'genre':payload.genre,
        'img':payload.img
    }
    let formData = new FormData();
    formData.append('img',payload.img)
    formData.set('title',payload.title)
    formData.set('author',payload.author)
    formData.set('genre',payload.genre)
    let header: {
        //  "content-type": "application/json",
          "content-type": "multipart/form-data"
       }
const response = await axios.post('http://localhost:3000/api/addBook',body,{headers:header})
console.log('xxx res', response.data)
return response.data
    })

    export const addBookSlice = createSlice({
        name:'addBook',
        initialState,
        reducers:{},
        extraReducers:(builder) =>{
            builder.addCase(addBook.pending,(state) => {
                state.isLoading=true;
            })
            builder.addCase(addBook.fulfilled,(state,action) => {
                state.isLoading = false;
                state.books = action.payload;
            })
            builder.addCase(addBook.rejected,(state) => {
                state.isError = true;
            })
        }
    })

     export const submitAddBook = addBookSlice.action;
    export default addBookSlice.reducer;