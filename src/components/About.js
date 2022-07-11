import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className = 'about'>
      <button className = 'links' > <Link to = '/about/app' >About App</Link></button>
      <button className = 'links' ><Link to = '/about/author' >about author</Link></button>
    </div>
  )
}

export default About