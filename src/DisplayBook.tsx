import { useEffect, useState } from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from './store/store'
import { getAllBooks} from './store/bookSlice'
import { ListComponent } from './ListComponent.tsx'
import { AddBookComponent } from './AddBookComponent.tsx'
import { Grid2 } from '@mui/material'

export const DisplayBook = () => {
const dispatch = useDispatch();
    const bookReducer = useSelector((state:RootState) => state.getAllBookSliceReducer);

    useEffect(() => {
        dispatch(getAllBooks())
    },[])

    return(
        <Grid2 container spacing={2} display={'flex'}>List of books
            <AddBookComponent/>
            <ListComponent/>
        </Grid2>
    )
}
