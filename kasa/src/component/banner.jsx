function Banner({image,slogan}) {
  return (
    <div className="banner">
      <div className="banner_opacity"></div>
      <img
        src = {image}
        alt="Paysage de rivages avec la mer et les rochers"
        className="banner_image"
      />
      <h1 className="banner_slogan">{slogan}</h1>
    </div>
  );
}

export default Banner;
