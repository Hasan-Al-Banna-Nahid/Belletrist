import Banner from "../Banner/Banner";
import Example from "../Example/Example";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Service from "../Service/Service";
import Sponsor from "../Sponsor/Sponsor";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Sponsor />
      <Feature />
      <Example />
      <Footer />
    </div>
  );
};

export default Home;
