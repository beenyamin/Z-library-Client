import { Link } from "react-router-dom";
import Science from "../../../public/images/Science-bro.png"
import History from "../../../public/images/History.png"
import Nobel from "../../../public/images/Novel.png"
import Comics from "../../../public/images/comics.png"


const BookCategory = () => {
    return (
        <div className="my-14">

            <h2 className=" text-center text-2xl font-bold ">Book Category </h2>
            <p className=" text-center mb-10 text-lg font-medium ">Find the book you are looking for...!</p>

            <div className="grid grid-cols-1  lg:grid-cols-2 lg:px-14 ">

                {/* Card 1 */}

                <Link to={'/science'}>
                    <div className='bg-fuchsia-400 shadow-xl  lg:h-36 lg:ml-5  flex justify-around text-white rounded-md '>
                        <div>
                            <img src={Science} className="lg:w-28 w-30 lg:h-28 h-36 ml-4 lg:ml-0  mt-4 border-white lg:border-4 rounded-md" alt="" />
                        </div>

                        <div className=" lg:pt-4 pt-3 pl-8 lg:pl-4 space-y-1  ">
                            <h2 className="text-2xl font font-semibold">Science</h2>
                            <p>"Science is the poetry of reality" <br />Richard Dawkins</p>
                            <button className="px-2 py-1 bg-emerald-300 rounded-md ">See Books</button>

                        </div>
                    </div>
                </Link>

                {/* 1 ---> */}



                {/*card 2  */}

                <Link to={'/history'} >
                    <div className='bg-green-200 mt-5 lg:mt-0  shadow-xl lg:ml-5   lg:h-36 flex justify-around text-black rounded-md '>
                        <div>
                            <img src={History} className="lg:w-28 w-30 lg:h-28 h-36 ml-4 lg:ml-0  mt-4 border-white lg:border-4 rounded-md" alt="" />
                        </div>

                        <div className=" lg:pt-4 pt-3 pl-8 lg:pl-4 space-y-1  ">
                            <h2 className="text-2xl font font-semibold">History</h2>
                            <p>"Check The out history books here" </p>
                            <button className="px-2 py-1 text-white bg-fuchsia-400  rounded-md ">See Books</button>

                        </div>
                    </div>
                </Link>

                {/* 2--> */}

                {/*card 3  */}

                <Link to={'/novel'} >
                    <div className='bg-yellow-200 mt-5 shadow-xl  lg:ml-5   lg:h-36 flex justify-around text-black rounded-md '>
                        <div>
                            <img src={Nobel} className="lg:w-28 w-30 lg:h-28 h-36 ml-4 lg:ml-0  mt-4 border-white lg:border-4 rounded-md" alt="" />
                        </div>

                        <div className=" lg:pt-4 pt-3 pl-8 lg:pl-4 space-y-1  ">
                            <h2 className="text-2xl font font-semibold">Novel</h2>
                            <p>"Check The out Novel books here" </p>
                            <button className="px-2 py-1 text-black bg-red-400 rounded-md ">See Books</button>

                        </div>
                    </div>
                </Link>

                {/* 3--> */}

                {/*card 4  */}

                <Link to={'/comics'} >
                    <div className='bg-red-400 mt-5 shadow-xl lg:ml-5 lg:h-36 flex justify-around text-black rounded-md '>
                        <div>
                            <img src={Comics} className="lg:w-28 w-30 lg:h-28 h-36 ml-4 lg:ml-0  mt-4 border-white lg:border-4 rounded-md" alt="" />
                        </div>

                        <div className=" lg:pt-4 pt-3 pl-8 lg:pl-4 space-y-1  ">
                            <h2 className="text-2xl font font-semibold">Comics</h2>
                            <p>Check out the history books here</p>
                            <button className="px-2 py-1 text-black bg-yellow-200 rounded-md ">See Books</button>

                        </div>
                    </div>
                </Link>


                {/* 4--> */}





            </div>


        </div>
    );
};

export default BookCategory;