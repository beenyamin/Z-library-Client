import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {

    const book = useLoaderData();
    const { _id, name, image, authorName, category, quantity, description, rating } = book || {};
    const add = { id: _id, name, image, authorName, category, quantity, description, rating }


    const handelAddToBorrow = () => {

        fetch('https://assignment-11-server-rho-ashen.vercel.app/borrowItem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success?',
                        text: "You SuccessFully Borrow This Book",
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }


    return (
        <div className="mt-14">

            <div className="hero space-y-5 rounded-lg  min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className=" w-96 lg:mr-24 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl mb-5 font-bold ">{name}</h1>
                        <hr />
                        <p className="text-xl font-semibold"> <span className="text-sky-400 text-xl font-semibold ">Author : </span> {authorName}</p>
                        <hr />
                        <p className="text-xl font-semibold"> <span className="text-sky-400 text-xl font-semibold ">Category Of This Book : </span> {category}</p>
                        <hr />
                        <p className="text-xl font-semibold"> <span className="text-sky-400 text-xl font-semibold ">Quantity:</span> {quantity}</p>
                        <hr />

    {/* rating */}
                         <div className="flex ">

                            <div>
                            <p className="text-xl font-semibold"> <span className="text-sky-400 text-xl font-semibold ">Rating </span> {rating}</p>
                            </div>

                            <div className="ml-3">
                            <div className="rating ">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>

                            </div>


                         </div>


                        <hr />

                        <p className=""> <span className="text-sky-400 text-xl font-semibold ">Details:</span> {description}</p>
                        <hr />

                        <Link to={'/borrowedBooks'}><button onClick={handelAddToBorrow} className=" text-white rounded-lg py-2 mt-4 font-medium  px-4 bg-pink-400 hover:bg-sky-600 ...">Borrow</button></Link>
                        <Link><button className=" text-white rounded-lg py-2 mt-4 ml-2 font-medium  px-4 bg-pink-400 hover:bg-sky-500 ...">Read</button></Link>

                    </div>
                </div>
            </div>






        </div>
    );
};

export default Details;