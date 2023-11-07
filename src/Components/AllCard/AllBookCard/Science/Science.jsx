import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ScienceCard from "./ScienceCard";


const Science = () => {

    const loadedBook = useLoaderData()
    const [books, setBooks] = useState(loadedBook)


    return (
        <div>
            <div>   <h2 className="text-2xl lg:mt-5 mt-10 mb-5  font-bold text-center">Category: Science</h2></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 ">

                {
                    books.map(book => <ScienceCard key={book._id} setBooks={setBooks} books={books} book={book}></ScienceCard>)
                }

            </div>

        </div>

    );
};

export default Science;