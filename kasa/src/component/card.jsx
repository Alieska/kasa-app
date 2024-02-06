import { NavLink } from 'react-router-dom';

function Card({id,title,cover}) {
    return (
      <div className="card">
        <NavLink to={`annonce/${id}`} className="card_nav">
        <img src={cover} alt={`Photo de couverture de l'annonce ${title}`} className='card_image' />         
        <h2 className="card_title">
            {title}
        </h2>
        <div className="card_bg"></div>
        </NavLink>
      </div>
    );
  }

  export default Card;