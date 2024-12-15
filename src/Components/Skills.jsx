import skills from "../data/skills.json";

function Skills() {
    return (
        <div id="SkillsSection" className="section">
            <div>
                <h1 className="text-3xl m-auto text-center font-semibold text-primary">Skills</h1>
                <div className="flex flex-wrap justify-center mt-8 max-w-screen-md m-auto">
                    {skills.map((skill) => 
                        <div style={{backgroundColor: `${skill.color}`, color: `${skill.textColor}`}} className={"w-fit m-1 px-1 py-0.5 items-center flex font-semibold"}>
                            <img className="w-5 h-5 mr-1.5" src={skill.image}></img>
                            <span>{skill.name}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills;