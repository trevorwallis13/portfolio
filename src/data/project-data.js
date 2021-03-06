import { FaReact, FaBootstrap, FaNodeJs, FaCss3, FaHtml5, FaSass } from 'react-icons/fa'
import { SiPostgresql, SiExpress, SiRedux } from 'react-icons/si'

export const projectData = [
    {
        name: "Pick My Meals",
        img: "/images/projects/pick-my-meals.png",
        altText: "Pick My Meals project screenshot",
        description: (
            <>
                <p>A CRUD web app with user authentication built with React, Sass, Express, and PostgreSQL. </p>
                <p>Pick My Meals takes the 'I don't know' out of 'what do you want for dinner?' Add your favorite meals and plan your dinners for the week using drag-n-drop. Can't decide? hit 'Pick My Meals' to fill all your remaining evenings with a random selection from your list.</p>
            </>
            ),
        liveLink: "https://pickmymeals.herokuapp.com/",
        githubLink: "https://github.com/trevorwallis13/pick-my-meals",
        techStack: [
            {
                name: 'React',
                icon: <FaReact />
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />
            },
            {
                name: 'Sass',
                icon: <FaSass />
            },
            {
                name: 'PostgreSQL',
                icon: <SiPostgresql />
            },
            {
                name: 'Express',
                icon: <SiExpress />
            },
            {
                name: 'Node',
                icon: <FaNodeJs />
            }
        ]
    },
    {
        name: "RoSTRY CoMS [COMING SOON]",
        img: "/images/projects/rostry.png",
        altText: "RoSTRY logo",
        description: (
            <>
                <p>RoSTRY is my current passion project. Returning to my roots as a barista, trainer, and coffee roaster, I'm building the app I wish I had when I started roasting coffee. I'm calling it a Coffee Management System (CoMS). </p>
                <p>I'm building this app in react with an Express/Postgres backend. Users will be able to register, set up company profiles with multiple roasters, track their coffee inventory, and plan their daily roasting lineup.</p>
            </>
            ),
        liveLink: "https://github.com/trevorwallis13/",
        githubLink: "https://github.com/trevorwallis13/",
        techStack: [
            {
                name: 'React',
                icon: <FaReact />
            },
            {
                name: 'Redux',
                icon: <SiRedux />
            },
            {
                name: 'Sass',
                icon: <FaSass />
            },
            {
                name: 'PostgreSQL',
                icon: <SiPostgresql />
            },
            {
                name: 'Express',
                icon: <SiExpress />
            },
            {
                name: 'Node',
                icon: <FaNodeJs />
            }
        ]
    },
    {
        name: "Squordle",
        img: "/images/projects/squordle.png",
        altText: "Squordle: Gotta Guess 'em All",
        description: (
            <>
                <p className="project-description">Your favorite childhood games meets your current obsession. Squordle is a Pokemon-themed Wordle clone that allows you to play multiple times per day in a quest to Catch 'em All!</p>
                <p className="project-description">Squordle is a single-page React app. Sticking to its Wordle roots, the app gives every user the same starting word each day. However, players can continue playing as many times as they'd like with a randomly chosen Pokemon.</p>
            </>
            ),
        liveLink: "https://squordle.co/",
        githubLink: "https://github.com/trevorwallis13/squordle",
        techStack: [
            {
                name: 'React',
                icon: <FaReact />
            },
            {
                name: 'CSS3',
                icon: <FaCss3 />
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />
            }
        ]
    },
    {
        name: "Simple React Portfolio",
        img: "/images/projects/simple-react-portfolio.png",
        altText: "Trevor Wallis portfolio screenshot",
        description: (
            <>
                <p className="project-description">The Simple React Portfolio template allows developers to showcase their projects and a short biography in a clean, minimal design.</p>
                <p>I designed this single-page portfolio using React, Sass, and React Bootstrap. Components and styles are conventiently segmented for other developers to easily adapt to their own style preferences.</p>
            </>
            ),
        liveLink: "https://trevorwallis13.github.io/simple-react-portfolio-template/",
        githubLink: "https://github.com/trevorwallis13/simple-react-portfolio-template",
        techStack: [
            {
                name: 'React',
                icon: <FaReact />
            },
            {
                name: 'Sass',
                icon: <FaSass />
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />
            }
        ]
    },
    {
        name: "Church Homepage Clone",
        img: "/images/projects/church-homepage-clone.png",
        altText: "Clone of Jubilee Church website from December 2021",
        description: (
            <>
                <p>A pure HTML/CSS clone of Jubilee Church's website from December 2021. I used the church's existing website as a visual guide while I recreated the homepage layout with a responsive design using flexbox.</p>
            </>
            ),
        liveLink: "https://trevorwallis13.github.io/Jubilee-Church-HTML-Clone/",
        githubLink: "https://github.com/trevorwallis13/Jubilee-Church-HTML-Clone/",
        techStack: [
            {
                name: 'HTML5',
                icon: <FaHtml5 />
            },
            {
                name: 'CSS3',
                icon: <FaCss3 />
            }
        ]
    }
]