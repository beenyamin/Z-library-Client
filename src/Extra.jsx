<div>

         {/* <Link to={`/product/${_id}`}> <button className="btn-sm
          bg-indigo-600 text-white rounded-lg mr-3 ">Details</button></Link> */}
      


    </div>
//borrow
const [getBook , setGetBook] =useState ([]);
    
const {user} =useAuth ();
const url = (`https://assignment-11-server-rho-ashen.vercel.app/book?email=${user?.email}`)

useEffect( () => {
    axios.get (url , {withCredentials:true})
    .then (res => {
       setGetBook(res.data);
    })

},[])










<div className=" my-4 lg:ml-10 ">

<div className="card lg:w-10/12 h-60 lg:h-60 card-side bg-base-100 shadow-xl">
  <figure><img className="lg:w-72 w-96 h-60 lg:h-60" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{authorName}</p>
    <p>{category}</p>
    <div className="rating">
       <p className="mr-2"> {rating}</p>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>


    <div className="card-actions pt-3 justify-end">
          
         <Link to={`/updateBook/${_id}`}> <button className="btn-sm
         bg-sky-500 text-white rounded-lg mr-3">Update</button> </Link>

         {/* <Link to={`/update/${_id}`}> <button className="btn-sm
         bg-indigo-600 text-white rounded-lg mr-3">Update</button> </Link> */}
           

    </div>
  </div>
</div>

<div className="card-actions justify-end">

<button onClick={() => handleDelete(_id)} className="btn-sm bg-sky-400 text-white rounded-lg mr-3 ">Remove</button>
<Link to={'/product'} > <button className="btn-sm bg-sky-400 text-white rounded-lg mr-3">Return</button> </Link>

</div>







    </div>
























</div>