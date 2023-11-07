import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllBookCard from "../Components/AllCard/AllBookCard/AllBookCard";


const AllBook = () => {

    const loadedBook = useLoaderData()
    const [books, setBooks] = useState(loadedBook)


    return (


        <div>
            <div className="lg:ml-96 mt-16">

            <div className="join">
                <div>
                    <div>
                        <input className="input w-40 input-bordered join-item" placeholder="Search" />
                    </div>
                </div>
                <select className="select w-9 select-bordered join-item">
                    <option disabled selected>Filter</option>
                    <option>Science</option>
                    <option>History</option>
                    <option>Novel</option>
                    <option>Comics</option>
                </select>
                <div className="indicator">
                    <span className="indicator-item badge badge-info text-white">new</span>
                    <button className="btn join-item">Search</button>
                </div>
            </div>


            </div>




            <div className="grid grid-cols-1 lg:grid-cols-2 mb-20  mt-10">

                {
                    books.map(book => <AllBookCard key={book._id} setBooks={setBooks} books={books} book={book}></AllBookCard>)
                }

            </div>

        </div>


    );
};

export default AllBook;