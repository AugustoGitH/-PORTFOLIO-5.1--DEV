import { ReactNode } from "react"

interface ITechInProjects {
    name: string,
    icon: ReactNode | string
}

const techsInProjects: ITechInProjects[] = [
    {
        name: "HTML5",
        icon: (<i className="bx bxl-html5" />)
    },
    {
        name: "CSS3",
        icon: (<i className="bx bxl-css3" />)
    },
    {
        name: "JavaScript",
        icon: (<i className="bx bxl-javascript" />)
    },
    {
        name: "JQuery",
        icon: (<i className='bx bxl-jquery' ></i>)
    },

    {
        name: "SASS",
        icon: (<i className='bx bxl-sass' ></i>)
    },
    {
        name: "Firebase",
        icon: (<i className="bx bxl-firebase" />)
    },
    {
        name: "Bootstrap",
        icon: (<i className="bx bxl-bootstrap" />)
    },
    {
        name: "NodeJS",
        icon: (<i className="bx bxl-nodejs" />)
    },
    {
        name: "MongoDB",
        icon: (<i className="bx bxl-mongodb" />)
    },
    {
        name: "ReactJS",
        icon: (<i className="bx bxl-react" />)
    },
    {
        name: "Redux",
        icon: (<i className='bx bxl-redux' ></i>)
    },
    {
        name: "NextJS",
        icon: (<i className="bx bxl-react" />)
    },
    {
        name: "TypeScript",
        icon: (<i className="bx bxl-typescript" />)
    },
    {
        name: "Git",
        icon: (<i className='bx bxl-git'></i>)
    },
    {
        name: "Trello",
        icon: (<i className='bx bxl-trello' ></i>)
    }
]

export default techsInProjects