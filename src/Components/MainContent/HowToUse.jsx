

const HowToUse = () => {
    return (
        <div className=" my-20">

            <div className=" lg:h-screen shadow-2xl lg:ml-10 rounded-md  bg-slate-200 ">
                <h2 className="text-2xl font-bold text-center pt-6 text-white ">How To Use Zlibrary </h2>

                <div className=" grid grid-cols-1 lg:grid-cols-2 px-8 lg:mt-8 ">

        <div className="stack">
            <div className="card lg:w-11/12 lg:h-80 shadow-md bg-primary text-primary-content">
                <div className="card-body ">
                    <h2 className="card-title text-2xl font-bold">Welcome to Zlibrary </h2>
                    <p> In about two minutes, you can learn
                        how to make a  Zlibrary.org profile, create and add items to lists,
                        export citations, and use facets to narrow your search criteria.
                        It’s a quick way to introduce yourself to the basics of searching
                        the world’s largest collection of information about materials in
                        libraries.</p>
                        <a className="underline">Lear More</a>
                </div>
            </div>

           

        </div>

                    {/* 2--> */}

                    <div>


                        <div className="stack">
                    <div className="card lg:w-11/12 lg:h-80 shadow-md lg:ml-5  lg:mt-0  bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold ">Use ZLibrary for school research</h2>
                            <p>Learn additional basic and advanced search techniques in this simple  
                              tutorial. We’ll walk through how to get resources for a solar system 
                              report that a younger student (maybe working with a parent or teacher)
                               might be assigned and provide tips for college students and more
                                advanced researchers.</p>
                                
                                    <a className="underline">Lear More</a>

                        </div>
                    </div>
                           
                        </div>


                    </div>

                </div>

            </div>



        </div>
    );
};

export default HowToUse;