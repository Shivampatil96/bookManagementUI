import { createSlice, PayloadAction, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface bookDetailsInitialState {
    books: { _id: String, title: String, author: String, genre: String, img: String }
    isLoading: boolean
    isEdit: boolean
    id: String
}

const initialState: bookDetailsInitialState = {
    books: { _id: '', title: '', author: '', genre: '', img: '' },
    isLoading: true,
    isEdit: false,
    id: ''

}

export const bookObjectSlice = createSlice({
    name: 'updateBook',
    initialState,
    reducers: {
        updateBook: (state, action) => {
            console.log("xxx action.payload ", action.payload)
            state.books = action.payload,
                console.log("xxx action.book ", state.books)
            //state.isEdit = false

        },
        addBookButton: (state) => {
            state.isEdit = false

        },
        setSelectedBookId: (state, action) => {
            state.id = action.payload
            state.isEdit = true
        }
    },

})

export default bookObjectSlice.reducer;
export const { updateBook, addBookButton, setSelectedBookId } = bookObjectSlice.actions