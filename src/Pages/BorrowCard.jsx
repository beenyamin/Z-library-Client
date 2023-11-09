import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";


const BorrowCard = ({ book, books, setBooks }) => {

    const { _id, name, image, authorName, category, quantity, description, rating } = book;  
    const [getBook , setGetBook] = useState ([]);
    const {user} =useAuth ();
    const url = (`https://assignment-11-server-rho-ashen.vercel.app/borrowItem?email=${user?.email}`)

    useEffect( () => {
        axios.get (url , { withCredentials:true })
        .then (res => {
           setGetBook(res.data);
        })

    },[url])



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

                fetch(`https://assignment-11-server-rho-ashen.vercel.app/borrowItem/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Removed!',
                                'Book Remove SuccessFully',
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

<div className=" my-4 lg:ml-10 ">

<div className="card   dark:text-black  lg:w-10/12  lg:h-80 card-side bg-base-100 shadow-xl">
  <figure><img className="lg:w-64 w-64 lg:h-80" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title"> {name}</h2>
    <p>Borrow : 2023-11-09 </p>
    <p>Return :  2023-11-15 </p>
    <p>Category: {category}</p>
   

    <div className="card-actions pt-3 justify-end">          
        
    <button onClick={() => handleDelete(_id)} className="btn-sm bg-sky-400 text-white rounded-lg mr-3 ">Remove</button>
<Link to={'/allBooks'} > <button className="btn-sm bg-sky-400 text-white rounded-lg mr-3">Return</button> </Link>
  
           

    </div>
  </div>
</div>









    </div>

        </div>
        


    );
};

export default BorrowCard;