

const Subjects = () => {
    return (

        <div className="my-14">


        <h2 className=" text-center text-2xl font-bold ">Subject</h2>
        <p className=" text-center mb-10 text-lg font-medium ">Find A Specific Subject That you are looking for...!</p>


        <div className="grid grid-cols-1 ml-4 lg:ml-20 lg:grid-cols-2 w-11/12 ">

            {/* right */}
            <div>
                <div tabIndex={0} className="collapse collapse-arrow  w-11/12  border border-base-300 bg-sky-400">
                    <div className="collapse-title text-xl font-medium">
                        <p className="text-white">Chemistry</p>
                    </div>
                    <div className="collapse-content  bg-white">
                        <p>Analytical Chemistry</p>
                        <p>Biochemistry</p>
                        <p>Catalysis</p>
                        <p>Chemical Engineering</p>
                        <p>Environmental Chemistry</p>
                    </div>
                </div>
            </div>

            {/* left */}
            <div>
                <div tabIndex={0} className="collapse collapse-arrow w-11/12 my-4 lg:my-0 border border-base-300 bg-pink-400">
                    <div className="collapse-title text-xl font-medium">
                        <p className="text-white">Humanities</p>
                    </div>
                    <div className="collapse-content bg-white">
                        <p>Classical Studies </p>
                        <p>Cultural Studies </p>
                        <p>History </p>
                        <p>Language & Linguistics </p>
                    </div>
                </div>
            </div>

            {/* right 2 */}
            <div>
                <div tabIndex={0} className="collapse collapse-arrow w-11/12 my-0 lg:my-4 border border-base-300 bg-red-300">
                    <div className="collapse-title text-xl font-medium">
                        <p className="text-white">Psychology</p>
                    </div>
                    <div className="collapse-content  bg-white">
                        <p> Applied Psychology</p>
                        <p>Clinical Psychology</p>
                        <p>Cognitive Psychology</p>
                        <p>Developmental Psychology</p>
                        <p>Educational & School Psychology</p>
                    </div>
                </div>
            </div>

            {/* left 2  */}

            <div>
                <div tabIndex={0} className="collapse collapse-arrow w-11/12 my-4    border border-base-300 bg-green-400">
                    <div className="collapse-title text-xl font-medium">
                        <p className="text-white">Art & Applied</p>
                    </div>
                    <div className="collapse-content  bg-white">
                        <p> Art & Photography</p>
                        <p>Clothing & Fashion</p>
                        <p>Design & Graphic Design</p>
                        <p>Museum & Heritage Studies</p>
                        <p>Performing Arts & Music</p>
                    </div>
                </div>
            </div>


            {/* right 3 */}

            <div>
                <div tabIndex={0} className="collapse collapse-arrow w-11/12  border border-base-300 bg-fuchsia-400">
                    <div className="collapse-title text-xl font-medium">
                        <p className="text-white">Finance & Accounting</p>
                    </div>
                    <div className="collapse-content  bg-white">
                        <p>Business & Management</p>
                        <p>Economics</p>
                        <p>Finance & Investments</p>
                        <p>Accounting</p>
                    </div>
                </div>
            </div>

            {/* left 3 */}

            <div>
                <div tabIndex={0} className="collapse collapse-arrow w-11/12 my-4 lg:my-0 border border-base-300 bg-blue-400">
                    <div className="collapse-title text-xl font-medium">
                        <p className="text-white">Life Science</p>
                    </div>
                    <div className="collapse-content  bg-white">
                        <p>Ecology</p>
                        <p>Evolution</p>
                        <p>General Life Sciences</p>
                        <p>Anatomy & Physiology</p>
                        <p>Cell & Molecular Biology</p>
                    </div>
                </div>
            </div>


        </div>

    </div>
    );
};

export default Subjects;