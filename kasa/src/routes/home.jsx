import Card from '../component/card'
import Banner from '../component/banner'
import Annonces from '../data/annonces.json'

function Home() {
      return (
            <main>
                  <Banner
                        image="/src/assets/paysage_rivage_mer_rochers.jpg"
                        slogan="Chez vous, partout et ailleurs"
                  />
                  <div className="ListCards">
                        {Annonces.map((annonce, index) => (
                              <Card
                                    key={`${annonce.id}-${index}`}
                                    id={annonce.id}
                                    title={annonce.title}
                                    cover={annonce.cover}
                              />
                        ))}
                  </div>
            </main>
      )
}

export default Home
