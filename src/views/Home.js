import Carousel from "../components/Carousel";
import ListaCards from "../components/ListaCards";

const Home = () => {
    return (
      <div>
        <Carousel/>
        <ListaCards lim={2} lim2={4} lim3={7}/>
      </div>
    );
}
  
export default Home;
  