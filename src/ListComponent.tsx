import { useEffect, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store'
import { getAllBooks } from './store/bookSlice'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Grid2 } from '@mui/material'
import { deleteBook } from './store/deletBookSlice'
import { updateBook , setSelectedBookId} from './store/bookObjectSlice'


export const ListComponent = () => {

    const dispatch = useDispatch();
    const bookReducer = useSelector((state: RootState) => state.getAllBookSliceReducer);
   // const bookObjReducer = useSelector((state: RootState) => state.getAllBookSliceReducer);
    const [booksList, setBooksList] = useState(bookReducer.books)

    useEffect(() => {

    }, [])

    const onDeleteButtonClick = async (book) => {
        await dispatch(deleteBook(book._id));
        dispatch(getAllBooks())
    }

    const onEditButtonClick = (book) => {
        console.log('xxxx id is ', book)
      dispatch(updateBook(book))
      dispatch(setSelectedBookId(book._id))
     
    }

    return (
        <Grid2 size={{ xs: 12, md: 8, lg: 12 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Authore</TableCell>
                            <TableCell align="right">Genre</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookReducer.books?.map((row) => (
                            <TableRow
                                key={row?.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.author}</TableCell>
                                <TableCell align="right">{row.genre}</TableCell>
                                <TableCell align="right">
                                    <Button role="button" name="Edit" onClick={e => onEditButtonClick(row)}>Edit</Button>
                                    <Button role="button" onClick={e => onDeleteButtonClick(row)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid2>
    )

}

