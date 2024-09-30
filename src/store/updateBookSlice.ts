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

export const updateBookDetails = createAsyncThunk('book/updateBook',async(payload) => {
    const body = {
        'title':payload.title,
        'author':payload.author,
        'genre':payload.genre,
        '_id':payload._id
    }
    console.log("xxx ddxid ", payload._id)
const response = await axios.patch(`http://localhost:3000/api/updateBook/${payload._id}`,body)
return response.data
    })

    export const updateBookSlice = createSlice({
        name:'updateBook',
        initialState,
        reducers:{},
        extraReducers:(builder) =>{
            builder.addCase(updateBookDetails.pending,(state) => {
                state.isLoading=true;
            })
            builder.addCase(updateBookDetails.fulfilled,(state,action) => {
                state.isLoading = false;
                state.books = action.payload;
            })
            builder.addCase(updateBookDetails.rejected,(state) => {
                state.isError = true;
            })
        }
    })

    //  export const submitAddBook = addBookSlice.action;
    export default updateBookSlice.reducer;