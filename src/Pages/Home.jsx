import BookCategory from "../Components/MainContent/BookCategory";
import HowToUse from "../Components/MainContent/HowToUse";
import Subjects from "../Components/MainContent/Subjects";
import Banner from "../Header/Banner";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <BookCategory></BookCategory>
        <Subjects></Subjects>
        <HowToUse></HowToUse>
       

        
       </div>
    );
};

export default Home;