import { createSlice, PayloadAction, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface bookDetailsInitialState {
    books: [] | null
    isLoading:boolean
    isError:boolean
}

const initialState: bookDetailsInitialState = {
    books:null,
    isLoading:true,
    isError:false

}

export const deleteBook = createAsyncThunk('/deleteBook',async(params) => {
    const id = params
const response = await axios.delete(`http://localhost:3000/api/deleteBook/${id}`)
return response.data
    })

    export const deleteBookSlice = createSlice({
        name:'deleteBook',
        initialState,
        reducers:{},
        extraReducers:(builder) =>{
            builder.addCase(deleteBook.pending,(state) => {
                state.isLoading=true;
            })
            builder.addCase(deleteBook.fulfilled,(state,action) => {
                state.isLoading = false;
                state.books = action.payload;
            })
            builder.addCase(deleteBook.rejected,(state) => {
                state.isError = true;
            })
        }
    })

    export default deleteBookSlice.reducer;