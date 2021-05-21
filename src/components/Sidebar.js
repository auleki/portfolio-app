import { RiMenu2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { SidebarStyle } from './StyledComponents'

const Sidebar = ({ visible, setOpen }) => {
  return (
    <SidebarStyle className={visible ? 'sidenav active' : 'sidenav'}>
      <ul className='navigation' onClick={() => setOpen(false)}>
        <Link to='/'>
          <li>
            <ion-icon name='home-outline' />
            <span>HOME</span>
          </li>
        </Link>
        <Link to='/projects'>
          <li>
            <ion-icon name='terminal-outline' />
            <span>PROJECTS</span>
          </li>
        </Link>
        <Link to='/experience'>
          <li>
            <ion-icon name='bulb-outline' />
            <span>EXPERIENCE</span>
          </li>
        </Link>
        <Link to='/contact'>
          <li>
            <ion-icon name='phone-portrait-outline' />
            <span>CONTACT</span>
          </li>
        </Link>
        <Link to='/about'>
          <li>
            <ion-icon name='finger-print-outline' />
            <span>ABOUT ME</span>
          </li>
        </Link>
        {/* <Link to='/pg'>
          <li>
            <ion-icon name='finger-print-outline' />
            <span>Playground</span>
          </li>
        </Link> */}
      </ul>
    </SidebarStyle>
  )
}

export default Sidebar
