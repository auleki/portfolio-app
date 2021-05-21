import { useState } from 'react'
import {
  Button,
  Paragraph,
  StyleProjectCard,
  SectionWrap,
  SubTitle
} from '../components/StyledComponents'
import { recentProjects, fonts, projectData } from '../utils/constants'
import MagicCard from '../components/MagicCard'

const ProjectCard = ({ project }) => {
  console.log('Picture link valid?', project.imageUrl)

  return (
    <StyleProjectCard>
      <div className='image'>
        <img src={project.imgUrl} alt='' />
      </div>
      <div className='info'>
        <div className='text'>
          <SubTitle>{project.title}</SubTitle>
          <Paragraph font={fonts.secondary} white marginY='1em'>
            {project.description}
          </Paragraph>
        </div>
        <div className='actions'>
          <a href={project.liveUrl}>
            <Button>
              <span>Preview</span>
              <ion-icon name='link-outline' />
            </Button>
          </a>
          <a
            href={project.githubLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button primary disabled={project.client}>
              <span>
                {project.client ? (
                  <div className='repoView'>
                    <span>REPO IS PRIVATE</span>
                    <ion-icon name='finger-print' />
                  </div>
                ) : (
                  <div className='repoView'>
                    <span>CHECK CODE</span>
                    <ion-icon name='git-branch-outline' />
                  </div>
                )}
              </span>
            </Button>
          </a>
          {/* )} */}
        </div>
      </div>
    </StyleProjectCard>
  )
}

const ProjectsCard = ({ projects }) => {
  // console.log('PROJECT STATE:', projectSets)
  return (
    <>
      <div className='recentProjects'>
        <div className='sectionTitle'>
          <div className='dash' />
          <SubTitle size={2}>{projects.section}</SubTitle>
        </div>
        <div className='sectionProjects'>
          {projects.projects.map((project, i) => (
            <MagicCard key={i} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}

const RecentProjects = () => {
  const [projectSets, setProjectSets] = useState(projectData)
  return (
    <SectionWrap>
      {/* UNDER STYLEPROJECTCARD  */}
      <div className='projectsSection'>
        {projectSets.map((project, i) => (
          <ProjectsCard key={i} projects={project} />
        ))}
      </div>
    </SectionWrap>
  )
}

export default RecentProjects
