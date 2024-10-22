import "../styles/Banner.scss";

function Banner(props) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <h1>{props.altText}</h1>
    </div>
  );
}

export default Banner;
