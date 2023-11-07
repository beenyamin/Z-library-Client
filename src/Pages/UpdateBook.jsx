

const UpdateBook = () => {




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
        const addProduct = { name, image, authorName, category, quantity, description, rating }
        console.log(addProduct);


    }






    return (

        <div className="bg-slate-300 rounded-md mt-14 mb-10 px-24 py-10 ml-3 lg:ml-0 ">

        <h2 className="text-3xl text-center justify-center mb-3 font-extrabold ">Update Book</h2>



        <form onSubmit={handleUpdateProduct}>

            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* row 1 */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Book Image</span>
                    </label>
                    <input type="text" name="image" placeholder=" Book Image " className="input input-bordered w-full max-w-xs" />
                </div>

                {/* defaultValue={authorName} */}


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name"  placeholder="Book Name"  className="input input-bordered w-full max-w-xs" />
                </div>

                {/* row 2 */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input type="text" name="authorName"  placeholder="Author Name"   className="input input-bordered w-full max-w-xs" />
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full max-w-xs" />
                </div>


                {/* row 3 */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                </div>

            </div>

            <input type="submit" value="Update Book"
                className="btn btn-info w-11/12 text-white  mt-4" />
        </form>

    </div>



       
    );
};

export default UpdateBook;