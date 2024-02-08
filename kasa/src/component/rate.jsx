import GreyStar from '../assets/GreyStar.svg'
import RedStar from '../assets/RedStar.svg'

const StarsRate = ({ rate_number_annonce }) => {
      const maxRate = [1, 2, 3, 4, 5]

      return (
            <div className="annonce_text_divProprioRate_starsRate">
                  {maxRate.map((element) =>
                        rate_number_annonce >= element ? (
                              <img
                                    key={element.toString()}
                                    src={RedStar}
                                    className="annonce_text_divProprioRate_starsRate_star"
                                    alt="Etoile rouge"
                              ></img>
                        ) : (
                              <img
                                    key={element.toString()}
                                    src={GreyStar}
                                    className="annonce_text_divProprioRate_starsRate_star"
                                    alt="Etoile grisée"
                              ></img>
                        ),
                  )}
            </div>
      )
}

export default StarsRate
