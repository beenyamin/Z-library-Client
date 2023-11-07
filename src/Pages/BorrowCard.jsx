import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const BorrowCard = ({ book, books, setBooks }) => {

    const { _id, name, image, authorName, category, quantity, description, rating } = book;


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/borrowItem/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Item deleted SuccessFully',
                                'success'
                            )
                            const remaining = books.filter(product => product._id !== _id);
                            setBooks(remaining);
                            console.log(remaining)
                        }

                    })
            }
        })
    }


    return (
        <div>

            <div  >

                <div className="card w-10/12 ml-6 lg:ml-0 mt-10 lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={image} className="w-64 h-48" alt="Album" /></figure>

                    <div className="card-body mr-10 pr-5">

                        <h2 className="card-title">{name}</h2>
                        <p> <span className="text-lg font-medium">Author : {authorName} </span> </p>
                        <p><span className="text-lg font-medium"> Quantity : {quantity} </span></p>

                        <div className="card-actions justify-end">

                            <button onClick={() => handleDelete(_id)} className="btn-sm bg-indigo-600 text-white rounded-lg mr-3 ">Delete</button>
                            <Link to={'/product'} > <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3">View</button> </Link>

                        </div>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default BorrowCard;