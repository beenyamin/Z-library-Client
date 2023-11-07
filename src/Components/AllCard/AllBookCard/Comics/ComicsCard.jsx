import { useEffect } from "react";
import { Link } from "react-router-dom";


const ComicsCard = ({ book, books, setBooks }) => {


    const { _id, name, image, authorName, category, quantity, description, rating } = book;

    useEffect(() => {
        const bookFilter = books.filter(book => book.category == 'Comics')
        setBooks(bookFilter)
    }, [])

    return (
        <div>


            <div className="my-4 lg:ml-10 lg:my-20">

                <div className="card  dark:text-black  lg:w-10/12 h-60 lg:h-60 card-side bg-base-100 shadow-xl">
                    <figure><img className="lg:w-72 w-96 h-60 lg:h-60" src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>By-{authorName}</p>
                        <p>{category}</p>
                        <div className="rating">
                            <p className="mr-2"> {rating}</p>
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>


                        <div className="card-actions justify-end">
                            <Link to={`/book/${_id}`}> <button className="btn-sm
                   bg-sky-500 text-white rounded-lg mr-3 ">Details</button></Link>
                            {/*           
       <Link to={`/product/${_id}`}> <button className="btn-sm
      bg-indigo-600 text-white rounded-lg mr-3 ">Details</button></Link> */}


                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default ComicsCard;