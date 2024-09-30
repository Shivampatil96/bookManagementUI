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

export const getAllBooks = createAsyncThunk('getAllBooks/getAllBooks',async() => {
const response = await axios.get('http://localhost:3000/api/getAllBooks')
console.log('xxx res', response.data)
return response.data
    })

    export const getAllBookSlice = createSlice({
        name:'getAllBooks',
        initialState,
        reducers:{},
        extraReducers:(builder) =>{
            builder.addCase(getAllBooks.pending,(state) => {
                state.isLoading=true;
            })
            builder.addCase(getAllBooks.fulfilled,(state,action) => {
                state.isLoading = false;
                state.books = action.payload;
            })
            builder.addCase(getAllBooks.rejected,(state) => {
                state.isError = true;
            })
        }
    })

    export default getAllBookSlice.reducer;