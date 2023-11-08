import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BorrowCard from "./BorrowCard";


const BorrowedBook = () => {

    const loadedBooks = useLoaderData () ;
    const [books , setBooks] = useState(loadedBooks)


    

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-4 my-20 mt-10" >

            {
                books.map (book => <BorrowCard key={book._id} book={book} setBooks={setBooks} books={books}></BorrowCard>)
            }
          
           
         
        </div>
    );
};

export default BorrowedBook;