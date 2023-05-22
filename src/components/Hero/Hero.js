import "./Hero.scss";
import {Link} from 'react-router-dom'
const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img alt="NM" src={props.heroImg}></img>
      <div className="hero-center">
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass}>
            {props.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};
//componente dinamice
export default Hero;
