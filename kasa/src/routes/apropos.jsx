import TextAPropos from '../data/TextAPropos.json'
import Banner from '../component/banner'
import imageApropos from '../assets/paysage_montagne.jpg'
import Toggle from '../component/toggle'

const sloganApropos = ''

function Apropos() {
      return (
            <main>
                  <Banner image={imageApropos} slogan={sloganApropos} />
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
