import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { ExternalLink as ExLink } from '../components'

export default function CV() {
  return (
    <SPaper id='SPaper'>
      <Head>
        <title>Peiwen Li's CV</title>
      </Head>
      <div className='lang-switch-btn'>
        <Link href='/cv-zh'>
          <a>中 / EN</a>
        </Link>
      </div>
      <section className='title'>
        <div className='portrait-container'>
          <img src='/cv-portrait-sm.jpg' alt="Peiwen Li's portrait" />
        </div>
        <div className='info'>
          <div className='general-info'>
            <h1>Peiwen Li</h1>
            <h2>Full-stack Software Developer</h2>
            <p>
              User-centered, scrupulous; develop software that brings joy and
              peace to the world
            </p>
          </div>
          <div className='contact-info'>
            <ExLink href='http://donlee.online'>donlee.online</ExLink>
            <ExLink href='mailto: don_lee@me.com'>don_lee@me.com</ExLink>
            <ExLink href='https://github.com/ld8'>github.com/ld8</ExLink>
          </div>
        </div>
      </section>

      <section className='skills'>
        <div className='sub-title'>
          <h3>Skills</h3>
        </div>
        <div className='sub-container'>
          <div className='aside'></div>
          <div className='details'>
            <ul>
              <li>
                Front-end: JavaScript, TypeScript, ReactJS, Redux, MobX, NextJS,
                VueJS, NuxtJS, UmiJS, Webpack, HTML5, CSS3, SASS, LESS,
                Bootstrap, Material UI, Chakra UI, Ant Desgin
              </li>
              <li>Back-end: NodeJS, Python, Django, Flask, Postgres</li>
              <li>Data Visualisation: Python, Plotly, Matplotlib</li>
              <li>
                UI/UX: having a master degree in Art and Science, I am confident
                in designing, coding and executing multi-disciplinary projects
                with great scrutiny
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='experience'>
        <div className='sub-title'>
          <h3>Experience</h3>
        </div>

        <div className='sub-container'>
          <div className='aside'>
            <p className='company-name'>MakeFurther IT</p>
            <p className='year'>May 2020 - April 2021</p>
            <ExLink href='http://www.makefurther.com/'>makefurther.com</ExLink>
          </div>
          <div className='details'>
            <h4>UI UX Designer and Web Developer</h4>
            <ul>
              <li>
                Web Dev: Efficiently develop web apps with React, TypeScript
                alongside libraries and frameworks such as antd and UmiJS
              </li>
              <li>
                Maintenance: Maintain existing projects, mainly using Vue and
                TypeScript with antd
              </li>
              <li>
                UI&UX Design: Design user-centered web UI, unify visual
                language, prototyping with Adobe XD, editing design documents
                including frontend execution regulations etc.
              </li>
              <li>
                Execution: Lead the frontend team to deliver the design in high
                quality, initiate weekly UI inspection, providing chances to
                revise the design and improve the user experience
              </li>
              <li>
                Communication: Become the tunnels between stakeholders to ensure
                that projects run smoothly
              </li>
            </ul>
            <p>
              Participating in high profile projects right after joining the
              company was certainly a challenge. Many roles were laid on my
              sholders. As a designer, I complemented the team and, in many
              ways, positively transformed the dynamic within the team. As a
              frontend developer, I contribute to the team with new ideas of how
              to write efficient, yet elegant code. An innovative web based
              quantitative trading platform with numerous user-centered features
              had reached its alpha phase after 2-month development. After a
              year of polishing, it now has become the leading product of the
              company.
            </p>
          </div>
        </div>

        <div className='sub-container'>
          <div className='aside'>
            <p className='company-name'>Freelance</p>
            <p className='year'>June 2019 - May 2020</p>
            <ExLink href='http://www.donlee.online'>donlee.online</ExLink>
          </div>
          <div className='details'>
            <h4>User Experience and Web app Designer</h4>
            <ul>
              <li>
                Build interactive web apps for clients - Design the
                interactivity, user experience and data structure based on their
                business models and requirement
              </li>
              <li>
                Develop web apps independently, mainly coding in JavaScript
                (React), Python (Django), PostgreSQL, HTML5, CSS3
              </li>
              <li>
                Portfolio:
                <ExLink
                  href='https://donlee.online'
                  style={{ paddingLeft: '6px' }}
                >
                  donlee.online/portfolio
                </ExLink>
              </li>
            </ul>
          </div>
        </div>

        <div className='sub-container'>
          <div className='aside'>
            <p className='company-name'>ACG International</p>
            <p className='year'>June 2017 - June 2019</p>
            <ExLink href='https://www.acgorg.com/'>acgorg.com</ExLink>
          </div>
          <div className='details'>
            <h4>Instructor — Art and Design</h4>
            <ul>
              <li>
                Teach applied arts, primarily interior design and analogue
                photography process to students for portfolio building and
                personal development in related subjects
              </li>
              <li>Develop curriculum and prepare outlines for workshops</li>
              <li>Provide individualised tutorial or remedial instruction</li>
              <li>Supervise independent projects and hands-on training</li>
              <li>Advise students on program curricula and career decisions</li>
            </ul>
            <p>
              In these two years as a teacher, 32 amongst 34 of my students have
              successfully secured offers from prestigious art institutions
              across UK, France, US, Canada, Australia, students majored in
              Interior design, photography and landscape design both on BA level
              (40%) and MA level (60%). While helping my lovely students
              embarking on their great journey, for consistently growing
              interests, I have been studying web design languages since 2016
            </p>
          </div>
        </div>

        <div className='sub-container'>
          <div className='aside'>
            <p className='company-name'>British Library</p>
            <p className='year'>May - November 2015</p>
            <ExLink href='https://www.bl.uk/'>bl.uk</ExLink>
          </div>
          <div className='details'>
            <h4>Volunteer Interpreter</h4>
            <p>
              Interpreting and translating Chinese minority manuscripts mainly
              scores. Only after being interpreted in Pinyin can they be further
              studied.
            </p>
            <p>
              Nearly 100 scripts were translated in half year. I am thrilled to
              have helped the study and have participated in the dissemination
              of Chinese minority culture in an international context
            </p>
          </div>
        </div>

        <div className='sub-container'>
          <div className='aside'>
            <p className='company-name'>M Moser Associates</p>
            <p className='year'>May 2011 - May 2013</p>
            <ExLink href='https://www.mmoser.com'>mmoser.com</ExLink>
          </div>
          <div className='details'>
            <h4>Project Coordinator and Interior Designer</h4>
            <p>
              From a project coordinator to a designer who leads a small team,
              my duty had grown drastically, including:
            </p>
            <ul>
              <li>drawing draft plans, construction plans and detail plans</li>
              <li>putting together project presentations</li>
              <li>conveying design ideas to clients in presentations</li>
              <li>on site construction management</li>
            </ul>
            <p>
              In these two years, I participated in one large project over 2000
              sqm, two medium projects over 1000 sqm and four smaller projects
              just under 500 sqm, all of which were successfully delivered on
              schedule. During this time, I tasted the fruit of seamless team
              work, gained understanding of project management, realising that
              much knowledge to be learnt, followed by further study in the UK
            </p>
          </div>
        </div>
      </section>

      <section className='education'>
        <div className='sub-title'>
          <h3>Education</h3>
        </div>

        <div className='sub-container'>
          <div className='aside'>
            <p className='year'>2018 - 2020</p>
            <ExLink href='http://www.interaction-design.org'>
              interaction-design.org
            </ExLink>
            <br />
            <ExLink href='http://www.freecodecamp.com'>freecodecamp.com</ExLink>
          </div>
          <div className='details'>
            <h4>Frontend Programmer Certificate, UI Design Practice</h4>
            <p>FreeCodeCamp, Interaction Design Foundation</p>
            <h6>Online and self-taught</h6>
          </div>
        </div>

        <div className='sub-container'>
          <div className='aside'>
            <p className='year'>2014 - 2016</p>
            <ExLink href='http://www.arts.ac.uk'>arts.ac.uk</ExLink>
          </div>
          <div className='details'>
            <h4>MA. in Art and Science</h4>
            <p>Central Saint Martins, University of Arts London</p>
            <h6>London, UK</h6>
          </div>
        </div>

        <div className='sub-container'>
          <div className='aside'>
            <p className='year'>2013 - 2014</p>
            <ExLink href='http://www.csvpa.com'>csvpa.com</ExLink>
          </div>
          <div className='details'>
            <h4>Pre MA.</h4>
            <p>Cambridge School of Visual and Performing Arts</p>
            <h6>Cambridge, UK</h6>
          </div>
        </div>

        <div className='sub-container'>
          <div className='aside'>
            <p className='year'>2009 - 2011</p>
            <ExLink href='http://www.shnu.edu.cn'>shnu.edu.cn</ExLink>
          </div>
          <div className='details'>
            <h4>Certificate - Interior Design</h4>
            <p>Shanghai Normal university</p>
            <h6>Shanghai, China</h6>
          </div>
        </div>

        <div className='sub-container'>
          <div className='aside'>
            <p className='year'>2006 - 2010</p>
            <ExLink href='http://www.tongji.edu.cn'>tongji.edu.cn</ExLink>
          </div>
          <div className='details'>
            <h4>BSc. Intelligent building and Technology</h4>
            <p>Tongji University</p>
            <h6>Shanghai, China</h6>
          </div>
        </div>
      </section>

      <section className='other'>
        <div className='sub-title'>
          <h3>Other Perks</h3>
        </div>

        <div className='sub-container'>
          <div className='aside'></div>
          <div className='details'>
            <ul>
              <li>
                Speaks fluent English (IELTS 8.0), native Mandarin and basic
                French
              </li>
              <li>
                In his free time, likes to read, blog, swim, photography and
                travel
              </li>
            </ul>
          </div>
        </div>
      </section>
    </SPaper>
  )
}

export const SPaper = styled.main`
  /* ------------------------- Language Switch ------- */
  .lang-switch-btn {
    position: fixed;
    right: 0;
    top: 40px;
    z-index: 10;

    a {
      padding: 8px 5px;
      text-decoration: none;
      font-size: 13px;
      color: var(--theme-color);
      border-radius: 5px 0 0 5px;
      border: 1px solid var(--theme-color);
      background-color: transparent;

      &:hover {
        color: white;
        border: none;
        background-color: var(--theme-color);
      }
    }

    @media only screen and (min-width: 800px) {
      position: sticky;
      align-self: flex-end;
      margin-right: -81px;
      margin-top: -25px;

      a {
        padding: 8px 10px;
      }
    }

    @media print {
      display: none;
    }
  }

  position: relative;
  width: 100%;
  height: 100%;
  max-width: var(--whole-width);

  margin: 50px auto;
  padding: var(--paper-padding);

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: var(--fontM);
  color: rgb(70, 70, 70);
  line-height: ${({ chinese }) => (chinese ? '1.8em' : '1.5em')};

  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;
  background-color: white;
  box-shadow: -4px 6px 0 rgb(0, 0, 0);

  @media only screen and (max-width: 800px) {
    margin: 0;
    padding: 40px;
  }

  /* ------------------------- general ------- */

  ul {
    list-style: square;
    margin-left: 20px;
  }

  h4,
  .company-name {
    font-weight: 600;
    background-color: rgb(245, 245, 245);
    margin-bottom: 5px;
    padding-left: 5px;
  }

  .company-name {
    font-weight: 400;
    padding-right: 5px;
  }

  @media only screen and (max-width: 800px) {
    .company-name {
      font-weight: 300;
      padding: 0;
      background-color: transparent;
    }
  }

  /* ------------------------- title section ------- */
  .title {
    margin-bottom: 30px;
    display: flex;

    .portrait-container {
      width: var(--aside-width);
      padding-right: 20px;

      img {
        width: 150px;
        height: 150px;
        border-radius: 3px;
      }
    }

    .info {
      display: flex;
      width: var(--main-width);

      .general-info {
        width: 460px;
        padding-right: 20px;

        h1 {
          text-transform: uppercase;
          padding-top: 5px;
          font-size: var(--fontXL);
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--theme-color);
        }

        h2 {
          font-weight: 100;
          color: grey;
          margin: ${({ chinese }) => (chinese ? '15px 0' : '10px 0')};
          font-size: ${({ chinese }) => (chinese ? 'medium' : '')};
        }

        p {
          font-size: var(--fontM);
        }
      }

      .contact-info {
        width: 130px;
        height: 90px;
        padding-left: 20px;
        border-left: 2px solid rgb(240, 240, 240);

        a {
          color: var(--theme-color);
          text-decoration: none;
          display: block;
          font-size: var(--fontS);

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .title {
      flex-direction: column;
      align-items: center;

      .portrait-container {
        padding: 0;
        display: flex;
        justify-content: center;
      }

      .info {
        margin-top: 25px;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .general-info {
          width: 100%;
          padding: 0;
        }

        .contact-info {
          width: 100%;
          height: auto;
          margin-top: 10px;
          padding: 0;
          border-style: none;
          a {
            display: inline-block;
          }
          a:nth-child(2),
          a:nth-child(3) {
            &::before {
              content: '/';
              padding: 0 5px;
              color: grey;
            }
          }
        }
      }
    }
  }

  /* ------------------------- SEE sections ------- */
  .skills,
  .experience,
  .education,
  .other {
    width: calc(var(--whole-width) - var(--paper-padding) * 2 - 2);
    margin-bottom: 20px;
    /* margin-left: auto; */
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      font-weight: 300;
      color: var(--theme-color);

      &:hover {
        text-decoration: underline;
      }
    }

    .sub-title {
      width: var(--main-width);
      margin-left: auto;

      h3 {
        width: var(--main-width);
        margin-bottom: var(--fontS);
        padding-bottom: 5px;

        color: var(--theme-color);
        font-size: var(--fontL);
        font-weight: 100;
        letter-spacing: 0.05em;
        border-bottom: 2px solid rgb(240, 240, 240);
      }
    }

    .sub-container {
      display: flex;
      margin-bottom: 20px;

      .aside {
        width: var(--aside-width);
        text-align: right;
        padding-right: 20px;

        .year {
          font-weight: 300;
        }
      }

      .details {
        width: var(--main-width);
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .skills,
    .experience,
    .education,
    .other {
      width: 100%;

      .sub-title {
        width: 100%;
      }

      .sub-container {
        flex-direction: column;

        .aside {
          display: flex;
          justify-content: space-between;
          text-align: left;
          padding: 0;

          a {
            display: none;
          }
        }

        .details {
          margin: 5px 0 20px 0;
        }
      }
    }

    .experience,
    .education {
      .sub-container {
        border-bottom: 1px solid rgb(240, 240, 240);

        :last-child {
          border-bottom: none;
        }
      }
    }
  }

  @media print {
    width: 842px;
    padding: 0;
    border: none;
    box-shadow: none;
    /* .experience{
      .sub-container {
        margin-bottom: 40px;
      }
    } */
  }
`
