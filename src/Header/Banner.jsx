
import BNimage from "../../public/Reading book-bro.png"
const Banner = () => {
    return (
        <div className=" mr-0 lg:mr-14">

            <div className="grid grid-cols-1 lg:grid-cols-2 ">

                <div className="space-y-3 ml-0 lg:ml-20 mt-0 lg:mt-20">
                    <h2 className="text-4xl font-extrabold">Explore the World <br /><span className="text-sky-500">  of Knowledge </span></h2>
                    <p>Dive into a world of endless knowledge with <br /> our library. Explore books, digital <br /> resources, and expand your horizons. <br /> Start your learning journey today</p>
                    <button className=" bg-sky-500 text-white font-medium rounded-md px-4 py-1">Learn More</button>
                </div>


                <div className="mr-20">
                    <img src={BNimage} className=" lg:ml-20 " alt="" />
                </div>

            </div>

        </div>
    );
};

export default Banner;