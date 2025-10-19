import ProjectCard from "./ProjectCard"

function ProjectWhole(props){
  const sets=[
    {id: 1,
      class: "App",
      title: "WeatherApp",
      link: "https://my-simpleweather-app.netlify.app/",
      img: "/assets/images/weather.png",
      desc: "A sleek and responsive weather app that displays real-time temperature, forecasts, and location-based conditions with a simple, modern interface.",
      tech: ["Javascript", "HTML", "CSS", "API"]
    },
    {id: 2,
      class: "Game",
      title: "TicTacToe Js Game",
      link: "https://tic-tac-toe-eosin-mu-29.vercel.app/",
      img: "/assets/images/tictacjs.png",
      desc: "An interactive Tic-Tac-Toe game built with Javascript that lets players compete either against a friend or an intelligent computer opponent.",
      tech: ["Javascript", "HTML", "CSS"]
    },
    {id: 3,
      class: "App",
      title: "Matirx",
      link: "https://what-i-love-project.vercel.app/",
      img: "/assets/images/matrix.png",
      desc: "A dynamic Matrix-themed project that simulates the iconic digital rain effect while exploring animations, and interactive visuals.",
      tech: ["HTML", "CSS"]
    },
    {id: 4,
      class: "UI/UX",
      title: "SweetRoot Bakery",
      link: "https://kebi-gizachew.github.io/SweetRoot-Bakery/pages/menu.html",
      img: "/assets/images/sweetroot.png",
      desc: "A SweetRoot Bakery website built with HTML and CSS, featuring pastel tones and a delightful, user-friendly design.",
      tech: ["HTML", "CSS", "Figma"]
    },
    {id: 5,
      class: "Game",
      title: "TicTacToe React Game",
      link: "https://tic-tac-toe-react-version.vercel.app/",
      img: "/assets/images/tictacreact.png",
      desc: "A React-based Tic-Tac-Toe game to play against a friend. ",
      tech: ["React", "CSS"]
    }
  ]
  const filteredSets = props.now === "All" ? sets : sets.filter(set => set.class === props.now);
  return (
    <div className="project-whole-container">
      {filteredSets.map((set)=>(
        <div key={set.id} className={set.class}>
          <ProjectCard img={set.img} title={set.title} description={set.desc} tech={set.tech.join(", ")} link={set.link} />
      </div>
      ))}
</div>
  )
}

export default ProjectWhole