import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBook = () => {

    const book = useLoaderData();
    const { _id, name, 
        image, authorName, 
        category, quantity,
         description, rating } = book;


    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const updateBook = { name, image, authorName, category, quantity, description, rating }
        console.log(updateBook);

        
        fetch(`http://localhost:5000/book/${_id}`, {

        method: 'PUT',
        headers: {

            'content-type': 'application/json'
        },

        body: JSON.stringify(updateBook)

    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            if (data.modifiedCount> 0) {
                Swal.fire({
                    title: 'Success?',
                    text: "Product Update SuccessFully",     
                    icon: 'success',
                    confirmButtonText: 'Yes, '
                  })

                
            }
        })




    }






    return (

        <div className="bg-slate-200 rounded-md mt-14 mb-10 px-24 py-10 ml-3 lg:ml-0 ">

        <h2 className="text-3xl text-center justify-center mb-3 font-extrabold ">Update Book</h2>



        <form onSubmit={handleUpdateProduct}>

            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* row 1 */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Book Image</span>
                    </label>
                    <input type="text" name="image"  defaultValue={image}  placeholder=" Book Image " className="input input-bordered w-full max-w-xs" />
                </div>

              


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name"  defaultValue={name}  placeholder="Book Name"  className="input input-bordered w-full max-w-xs" />
                </div>

                {/* row 2 */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input type="text" name="authorName"  defaultValue={authorName} placeholder="Author Name"   className="input input-bordered w-full max-w-xs" />
                </div>


                
                <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            name="category"
                            className="input input-bordered"
                        >
                            <option disabled selected>Category</option>
                            <option>Science</option>
                            <option>History</option>
                            <option>Novel</option>
                            <option>Comics</option>
                        </select>

                    </div>


                {/* row 3 */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name="quantity"  defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <input type="text" name="description"  defaultValue={description} placeholder="Short Description" className="input input-bordered w-full max-w-xs" />
                </div>


            </div>

            <input type="submit" value="Update Book"
                className="btn btn-info w-11/12 text-white  mt-4" />
        </form>

    </div>



       
    );
};

export default UpdateBook;