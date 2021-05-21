import { StyleMagicCard, AltButton } from '../components/StyledComponents'
import CovidImg from '../assets/covid-19-tracker.jpg'
import { icons } from '../utils/constants'

const MagicCard = ({ project }) => {
  let img1, img2, img3, img4

  img1 =
    'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619240048/portfolio/assets/covid-19-tracker_hzthyp.jpg'
  img2 =
    'https://img.pngio.com/js-logo-react-react-js-icon-react-png-512_512.png'
  img3 =
    'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png'
  img4 = 'https://www.chartjs.org/img/chartjs-logo.svg'

  return (
    <StyleMagicCard key={project.title}>
      <div className='rank'>
        {project.clientOwned ? icons.lock : icons.unlock}
      </div>

      <div className='front'>
        <img className='thumbnail' src={project.imgUrl} alt='' />
        <h3 className='name'>{project.title}</h3>
        <div className='stats'>
          <p className='viewers'>{project.stack}</p>
          {/* <div className='streamers'>
            {project.technologies.map((tech, i) => (
              <img src={tech.img} alt='' />
            ))}
          </div> */}
        </div>
      </div>

      <div className='back'>
        {/* <p className='description'>{project.description}</p> */}
        {/* if nothing in buttons show top secret */}
        <div className='buttons'>
          <a href={project.liveUrl}>
            <AltButton>{icons.link}</AltButton>
          </a>
          <a href={project.githubLink}>
            <AltButton>{icons.github}</AltButton>
          </a>
        </div>
        <div className='streamers'>
          {project.technologies.map((tech, i) => (
            <div className='streamer'>
              <div className='icon'>
                <img src={tech.img} alt='' />
              </div>
              {/* <div className='name'>{tech.name}</div> */}
            </div>
          ))}
        </div>
      </div>
      <div className='background'></div>
    </StyleMagicCard>
  )
}

export default MagicCard
