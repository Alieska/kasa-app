import React from 'react'
import { useParams } from 'react-router-dom'
import ListAnnonces from '../data/annonces.json'
import Toggle from '../component/toggle'
import StarsRate from '../component/rate'
import Gallery from '../component/gallery'
import ErrorPage from '../routes/error-page'

const TextAnnonce = () => {
      const { id } = useParams()

      const cetteAnnonce = ListAnnonces.find((annonce) => annonce.id === id)

      const equipements = cetteAnnonce?.equipments.map((equipement, index) => (
            <li className="listeEquipements" key={index}>
                  {equipement}
            </li>
      ))

      const tags = cetteAnnonce?.tags.map((tag, index) => (
            <div className="annonce_text_divEnTete_divTags_decoTag" key={index}>
                  <p className="annonce_text_divEnTete_divTags_decoTag_text">
                        {tag}
                  </p>
            </div>
      ))

      const rating = cetteAnnonce?.rating

      const listImage = cetteAnnonce?.pictures

      const nomProprietaire = cetteAnnonce?.host.name
      const tableauNomProprietaire = nomProprietaire.split(` `)
      const textNom = tableauNomProprietaire.map((nom, index) => (
            <p
                  className="annonce_text_divProprioRate_proprietaire_nomText"
                  key={index}
            >
                  {nom}
            </p>
      ))

      return (
            <main className="annonce">
                  <Gallery listImage={listImage} />
                  <div className="annonce_text">
                        <div className="annonce_text_divEnTete">
                              <div className="annonce_text_divEnTete_divTitre">
                                    <h1 className="annonce_text_divEnTete_divTitre_titre">
                                          {cetteAnnonce?.title}
                                    </h1>
                                    <p className="annonce_text_divEnTete_divTitre_localisation">
                                          {cetteAnnonce?.location}
                                    </p>
                              </div>
                              <div className="annonce_text_divEnTete_divTags">
                                    {tags}
                              </div>
                        </div>
                        <div className="annonce_text_divProprioRate">
                              <div className="annonce_text_divProprioRate_proprietaire">
                                    <div className="annonce_text_divProprioRate_proprietaire_nom">
                                          {textNom}
                                    </div>
                                    <img
                                          className="annonce_text_divProprioRate_proprietaire_photo"
                                          src={cetteAnnonce?.host.picture}
                                          alt="photo propriétaire"
                                    ></img>
                              </div>
                              <StarsRate rate_number_annonce={rating} />
                        </div>
                  </div>
                  <div className="annonce_collapses">
                        <Toggle
                              TitreParagraphe="Description"
                              TextApropos={cetteAnnonce?.description}
                        />
                        <Toggle
                              TitreParagraphe="Equipements"
                              TextApropos={equipements}
                        />
                  </div>
            </main>
      )
}

export default TextAnnonce
