import BookCategory from "../Components/MainContent/BookCategory";
import Subjects from "../Components/MainContent/Subjects";
import Banner from "../Header/Banner";

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <BookCategory></BookCategory>
        <Subjects></Subjects>

        
       </div>
    );
};

export default Home;