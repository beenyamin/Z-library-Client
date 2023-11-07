import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllBookCard from "../Components/AllCard/AllBookCard/AllBookCard";


const AllBook = () => {

    const loadedBook = useLoaderData ()
    const [books, setBooks] = useState(loadedBook)


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  mt-10">

               

            {

                books.map(book => <AllBookCard key={book._id} setBooks={setBooks} books={books} book={book}></AllBookCard> )
            }

      
        </div>
    );
};

export default AllBook;