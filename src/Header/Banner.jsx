
import BNimage from "../../public/6736905.jpg"
const Banner = () => {
    return (
        <div className="h-screen mt-10 lg:px-20 ">

            <div className="grid grid-cols-1 lg:grid-cols-2 ">

                <div className="space-y-3">
                    <h2 className="text-4xl font-extrabold">Explore the World <br /><span className="text-sky-500">  of Knowledge </span></h2>
                    <p>Dive into a world of endless knowledge with <br /> our library. Explore books, digital <br /> resources, and expand your horizons. <br /> Start your learning journey today</p>
                    <button className=" bg-sky-500 text-white font-medium rounded-md px-4 py-1">Learn More</button>
                </div>


                <div>
                    <img src={BNimage} className="w-80 h-80 " alt="" />
                </div>





            </div>

        </div>
    );
};

export default Banner;