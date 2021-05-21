import * as AiIcons from 'react-icons/ai'

let c1, c2, c3, c4, c5, c6, c7, c8
c1 = '#F2E8CF'
c2 = '#A7C957'
c3 = '#6A994E'
c4 = '#386641'
c5 = '#BC4749'
c6 = '#F9F8F8'
c7 = '#0B8BFF'
c8 = '#E9DFC7'

export const colors = {
  cream: c1,
  darkCream: c8,
  lightGreen: c2,
  green: c3,
  darkGreen: c4,
  blue: c7,
  red: c5,
  white: c6,
  gray: '#737373',
  dark: '#242424',
  hardDark: '#1a1a1a'
}

export const numeric = {
  border: 0.2
}

export const fonts = {
  alt: 'Inconsolata',
  main: 'KoHo',
  secondary: 'Recursive',
  crazy: 'Carter One'
}

export const icons = {
  link: <AiIcons.AiOutlineLink />,
  github: <AiIcons.AiOutlineGithub />,
  lock: <AiIcons.AiOutlineLock />,
  unlock: <AiIcons.AiOutlineUnlock />
}

const logos = {
  react:
    'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
  chartJs: 'https://www.chartjs.org/img/chartjs-logo.svg',
  express: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
  html:
    'https://mpng.subpng.com/20190125/wpj/kisspng-computer-icons-html5-scalable-vector-graphics-port-socialpack-chocolate-icon-5c4b3bbcb7d671.680718971548434364753.jpg',
  css:
    'https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png',
  javascript:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png',
  redux:
    'https://banner2.cleanpng.com/20180511/zie/kisspng-redux-react-javascript-vue-js-single-page-applicat-5af5cde3d3a5e8.2671715915260584678669.jpg',
  framerMotion: 'https://reactjsexample.com/content/images/2020/04/motion.png',
  materialUI: 'https://material-ui.com/static/logo.png'
}

export const recentProjects = [
  {
    imageUrl:
      'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616179417/portfolio/checkadigs-sc-5_kv31bf.png',
    title: 'Covid 19 Tracker',
    description:
      'Fetched data from a COVID 19 API. Created a card component to represent the data alongside a bar chart.',
    githubLink: 'https://github.com/auleki/tracking-covid-19',
    liveUrl: 'https://friendly-lichterman-40c5f6.netlify.app/'
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616179242/portfolio/checkadigs-sc3_klblyk.png',
    title: 'Checkadigs Stores',
    description:
      'This is a fullstack e commerce store which uses React for the client side and Express on for the backend.',
    // githubLink: 'https://github.com/auleki/tracking-covid-19',
    liveUrl: 'https://checkadigs.com',
    client: true
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616179524/portfolio/finpayng-sc_erqryc.png',
    title: 'FinPay Landing Page',
    description:
      'Here is a landing page created for a fintech company, built with the fantastic trio HTML, CSS and Javascript',
    // githubLink: 'https://github.com/auleki/tracking-covid-19',
    liveUrl: 'https://finpayng.com',
    client: true
  }
]

export const projectData = [
  {
    section: 'Fullstack',
    projects: [
      {
        title: 'Checkadigs Store',
        description: 'An E-Commerce store built for a client.',
        clientOwned: true,
        technologies: [
          {
            name: 'React',
            img: logos.react
          },
          {
            name: 'Redux',
            img: logos.redux
          }
        ],
        stack: ['REACT'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619321294/portfolio/portfolio/checkadigs_uc1zol.png',
        // githubLink: 'https://github.com/auleki/tracking-covid-19',
        liveUrl: 'https://nifty-ride-abb2a8.netlify.app/'
      },
      {
        title: 'Portfolio App',
        description:
          'This is the very app you are browsing, care to look under the hood?',
        clientOwned: false,
        technologies: [
          {
            img: logos.redux
          },
          {
            img: logos.framerMotion
          }
        ],
        stack: ['REACT'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619321294/portfolio/portfolio/portfolio_f1lnkd.png',
        githubLink: 'https://github.com/auleki/portfolio-app',
        liveUrl: 'https://sleepy-snyder-b79f21.netlify.app/'
      },
      {
        title: 'Checkadigs Dashboard',
        description:
          'A dashboard for store admin to visualize and interact with data.',
        clientOwned: true,
        technologies: [
          {
            name: 'Redux',
            img: logos.redux
          },
          {
            name: 'Framer Motion',
            img: logos.framerMotion
          },
          {
            img: logos.materialUI
          }
        ],
        stack: ['REACT'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619321294/portfolio/portfolio/dashboard_wenwli.png'
        // githubLink: 'https://github.com/auleki/tracking-covid-19',
        // liveUrl: 'https://friendly-lichterman-40c5f6.netlify.app/'
      }
    ]
  },
  {
    section: 'Frontend',
    projects: [
      {
        title: 'Covid 19 Tracker',
        description:
          'Fetches Covid 19 stats from an API and presents it beautifully to the client.',
        clientOwned: false,
        technologies: [
          {
            name: 'ChartJS',
            img: 'https://www.chartjs.org/img/chartjs-logo.svg'
          },
          {
            name: 'NodeJs',
            img: 'https://www.chartjs.org/img/chartjs-logo.svg'
          },
          {
            name: 'React',
            img:
              'https://img.pngio.com/js-logo-react-react-js-icon-react-png-512_512.png'
          }
        ],
        stack: ['REACT'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616179417/portfolio/checkadigs-sc-5_kv31bf.png',
        githubLink: 'https://github.com/auleki/tracking-covid-19',
        liveUrl: 'https://friendly-lichterman-40c5f6.netlify.app/'
      },
      {
        title: 'Pepsi Showcase',
        description: 'A landing page to showcase Pepsi can products.',
        clientOwned: false,
        technologies: [
          {
            name: 'HTML',
            img: logos.html
          },
          {
            name: 'CSS',
            img: logos.css
          },
          {
            name: 'JS',
            img: logos.javascript
          }
        ],
        stack: ['HTML/CSS/JS'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619319489/portfolio/portfolio/pepsi-showcase_m755q0.png',
        githubLink: 'https://github.com/auleki/sneaker-slides',
        liveUrl: 'https://auleki.github.io/sneaker-slides/'
      },
      {
        title: 'Simple Accordion',
        description:
          'Here is an accordion made with HTML and CSS, pretty simple.',
        clientOwned: false,
        technologies: [
          {
            name: 'HTML',
            img: logos.html
          },
          {
            name: 'CSS',
            img: logos.css
          }
        ],
        stack: ['HTML/CSS'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619319488/portfolio/portfolio/accordion_zzu9ia.png',
        githubLink: 'https://github.com/auleki/simple-accordion',
        liveUrl: 'https://auleki.github.io/simple-accordion'
      },
      {
        title: 'Grid Example',
        description: 'This page was built with CSS grids.',
        clientOwned: false,
        technologies: [
          {
            name: 'HTML',
            img: logos.html
          },
          {
            name: 'CSS',
            img: logos.css
          }
        ],
        stack: ['HTML/CSS'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619319495/portfolio/portfolio/grid-example_z0hicv.png',
        githubLink: 'https://github.com/auleki/grid-example',
        liveUrl: 'https://auleki.github.io/grid-example'
      },
      {
        title: 'Lookup Books',
        description: 'This single page site fetches data on books from an API.',
        clientOwned: false,
        technologies: [
          {
            name: 'HTML',
            img: logos.html
          },
          {
            name: 'CSS',
            img: logos.css
          },
          {
            name: 'JS',
            img: logos.javascript
          }
        ],
        stack: ['HTML/CSS/JS'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619319490/portfolio/portfolio/optisource-t2_ji0qev.png',
        githubLink: 'https://github.com/auleki/optisource-t2',
        liveUrl: 'https://auleki.github.io/optisource-t2/'
      },
      {
        title: 'Invoice Example',
        description: 'This page was built to create invoice for customers.',
        clientOwned: false,
        technologies: [
          {
            name: 'HTML',
            img: logos.html
          },
          {
            name: 'CSS',
            img: logos.css
          }
        ],
        stack: ['HTML/CSS'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619319489/portfolio/portfolio/optisource-t1_gtsvtt.png',
        githubLink: 'https://github.com/auleki/optisource-t1',
        liveUrl: 'https://auleki.github.io/optisource-t1/'
      }
    ]
  },

  {
    section: 'Backend',
    projects: [
      {
        title: 'Jumga Backend',
        description:
          'A backend application that serves data for an E-Commerce store.',
        clientOwned: false,
        technologies: [{ img: logos.express }],
        stack: ['Express'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619416799/portfolio/portfolio/Jumga_mfdkvu.png',
        githubLink: 'https://github.com/auleki/tracking-covid-19',
        liveUrl: 'https://friendly-lichterman-40c5f6.netlify.app/'
      },
      {
        title: 'Checkadigs Backend',
        description:
          'This is the API that powers both the store and admin dashboard.',
        clientOwned: true,
        technologies: [{ img: logos.express }],
        stack: ['Express'],
        imgUrl:
          'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619416947/portfolio/portfolio/cecadigs_chxyzt.png',
        githubLink: 'https://github.com/auleki/tracking-covid-19',
        liveUrl: 'https://friendly-lichterman-40c5f6.netlify.app/'
      }
    ]
  }
  // {
  //   section: 'Mobile',
  //   projects: [
  //     {
  //       title: 'Covid 19 Tracker',
  //       description:
  //         'This frontend application fetches Covid 19 stats from an API and presents it beautifully to the client.',
  //       clientOwned: false,
  //       technologies: ['ChartJS'],
  //       stack: ['REACT'],
  //       imgUrl:
  //         'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616179417/portfolio/checkadigs-sc-5_kv31bf.png',
  //       githubLink: 'https://github.com/auleki/tracking-covid-19',
  //       liveUrl: 'https://friendly-lichterman-40c5f6.netlify.app/'
  //     },
  //   ]
  // }
]
