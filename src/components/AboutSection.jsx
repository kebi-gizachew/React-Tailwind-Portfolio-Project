import SkillBox from "../components/SkillBox"

function MyAbout() {
  return (
    <div className="myabout-container">
  <h2 className="myabout-title">Who is Kebron?</h2>
      <p className="myabout-description">
        I am a passionate Software Engineering student at Addis Ababa University with a deep interest in web development,
        particularly in React and frontend development. I enjoy writing clean and efficient code while strengthening my problem-solving and DSA skills.
        I also have some experience in UI/UX design, which helps me create visually appealing and user-friendly interfaces.
        My ambition is to become a skilled frontend developer capable of building modern, responsive, and impactful web applications.
      </p>
      <h2 className="myabout-title">Skills</h2>
    <div className="myabout-skills">
        <SkillBox lan="HTML" />
        <SkillBox lan="CSS"/>
        <SkillBox lan="JavaScript"/>
        <SkillBox lan="Python" />
        <SkillBox lan="Figma"/>
      </div>
    </div>
  )
}

export default MyAbout