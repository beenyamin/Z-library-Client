import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ComicsCard from "./ComicsCard";


const Comics = () => {
    const loadedBook = useLoaderData()
    const [books, setBooks] = useState(loadedBook)
    return (
        <div>
            <div>   <h2 className="text-2xl lg:mt-5 mt-10 mb-5  font-bold text-center">Category: Comics</h2></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 ">

                {
                    books.map(book => <ComicsCard key={book._id} setBooks={setBooks} books={books} book={book}></ComicsCard> )
                }

            </div>

        </div>
    );
};

export default Comics;