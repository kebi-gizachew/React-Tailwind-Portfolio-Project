import SkillBox from "../components/SkillBox"

function MyAbout() {
  return (
    <div className="max-w-[900px] p-[20px] text-justify flex flex-col max-[768px]:max-w-full max-[768px]:p-[10px] max-[768px]:text-center">
  <h2 className="text-[50px] mb-[40px] mt-[30px] max-[768px]:text-[36px] max-[768px]:mb-[20px] max-[768px]:mt-[20px]">Who is Kebron?</h2>
      <p className="text-[30px] max-[768px]:text-[20px]">
        I am a passionate Software Engineering student at Addis Ababa University with a deep interest in web development,
        particularly in React and frontend development. I enjoy writing clean and efficient code while strengthening my problem-solving and DSA skills.
        I also have some experience in UI/UX design, which helps me create visually appealing and user-friendly interfaces.
        My ambition is to become a skilled frontend developer capable of building modern, responsive, and impactful web applications.
      </p>
      <h2 className="text-[50px] mb-[40px] mt-[30px] max-[768px]:text-[36px] max-[768px]:mb-[20px] max-[768px]:mt-[20px]">Skills</h2>
    <div className="flex flex-wrap justify-center items-center gap-[20px] mb-[50px] max-[768px]:flex-col max-[768px]:gap-[15px]">
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