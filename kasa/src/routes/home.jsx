import Card from "../component/card";
import Banner from "../component/banner";
import Annonces from "../annonces.json";
import imageAccueil from "../assets/paysage_rivage_mer_rochers.jpg";
import "../styles/home.scss";


const sloganAccueil = "Chez vous, partout et ailleurs"

function Home() {
  return (
    <main>
    <Banner image={imageAccueil} slogan={sloganAccueil} />
    <div className="ListCards">
      {Annonces.map((annonce, index)=>(
        <Card
        key={`${annonce.id}-${index}`}
        id={annonce.id}
        title={annonce.title}
        cover={annonce.cover}
        />
      ))} 
    </div>
    </main>
  );
}

export default Home;