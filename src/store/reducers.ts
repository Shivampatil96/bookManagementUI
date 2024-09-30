import { combineReducers } from "@reduxjs/toolkit";
import getAllBookSliceReducer from "./bookSlice";
import addBookSliceReducer from "./submitBookSlice";
import deleteBookSliceReducer from './deletBookSlice';
import bookObjectSlice from "./bookObjectSlice";
import updateBookSliceReducer from "./updateBookSlice";


const rootReducer = combineReducers({
    getAllBookSliceReducer,
    addBookSliceReducer,
    deleteBookSliceReducer,
    bookObjectSlice,
    updateBookSliceReducer
})

export default rootReducer