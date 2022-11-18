import Carousel from "../components/Carousel";
import ListaCards from "../components/ListaCards";

const Home = () => {
    return (
      <div>
        <Carousel/>
        <ListaCards limit={6}/>
      </div>
    );
}
  
export default Home;
  