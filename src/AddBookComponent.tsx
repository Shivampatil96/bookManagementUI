import React, {useEffect, useState} from "react";
import { TextField, Button, Grid2 } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./store/submitBookSlice";
import { getAllBooks} from './store/bookSlice'
import { RootState } from "./store/store";
import { updateBook ,addBookButton} from './store/bookObjectSlice'
import {updateBookDetails} from './store/updateBookSlice'


export const AddBookComponent = () => {
    const dispatch = useDispatch();
    const bookReducer = useSelector((state:RootState) => state.bookObjectSlice);

const [book,setBook] = useState(bookReducer.books)

useEffect(() => {
    setBook(bookReducer.books)
},[])

    const handleSubmit = async(event) => {
        event.preventDefault()
        if(bookReducer.isEdit) {
            const b = {
                'title' : book.title,
                'author' : book.author,
                'genre' :book.genre,
                '_id':bookReducer.id
            }
            await dispatch(updateBookDetails(b))
        }else{
            await dispatch(addBook(book))
        }

        setBook({title:String,
            author:String,
            genre:String,
        _id:String})

            dispatch(updateBook({title:String,
            author:String,
            genre:String,
            _id:String}))
            dispatch(addBookButton())

        dispatch(getAllBooks())
    }

    const onChange = (event) => {
        event.preventDefault()
        const {name,value} = event.target
        setBook((prevBook) => ({ ...prevBook,[name]:value }))
        dispatch(updateBook((prevBook) => ({ ...prevBook,[name]:value })))

    }
     const btnName  = bookReducer.isEdit ? 'Update' : 'Add'
    return ( 
        <Grid2 size={{ xs: 12, md: 8, lg:12 }}>
        <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Add New Book</h2>
                <TextField 
                name="title"
                    label="Title"
                     onChange={onChange}
                    required
                    placeholder="Title"
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={bookReducer.books.title}
                 />
                 <TextField 
                 name="author"
                 placeholder="Author"
                    label="Author"
                    onChange={onChange}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={bookReducer.books.author}
                    fullWidth
                    sx={{mb: 3}}
                 />
                  <TextField 
                  name="genre"
                  placeholder="Genre"
                    label="Genre"
                    onChange={onChange}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                     value={bookReducer.books.genre}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button  variant="outlined" color="secondary" type="submit">{btnName}</Button>
             
        </form>
        </React.Fragment>
        </Grid2>
     );
}