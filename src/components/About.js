import { Link } from 'react-router-dom';

const About = () => (
  <div className="about">
    <button className="links" type="button"><Link to="/about/app">About App</Link></button>
    <button className="links" type="button"><Link to="/about/author">about author</Link></button>
  </div>
);

export default About;
