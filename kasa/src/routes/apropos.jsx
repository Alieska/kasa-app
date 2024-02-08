import TextAPropos from '../data/TextAPropos.json'
import Banner from '../component/banner'
import Toggle from '../component/toggle'

function Apropos() {
      return (
            <main>
                  <Banner image="/src/assets/paysage_montagne.jpg" slogan="" />
                  <div className="apropos">
                        {TextAPropos.map((paragraphe, index) => (
                              <Toggle
                                    key={`${paragraphe.id}-${index}`}
                                    TitreParagraphe={paragraphe.title}
                                    TextApropos={paragraphe.text}
                              />
                        ))}
                  </div>
            </main>
      )
}

export default Apropos
