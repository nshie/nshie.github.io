import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import skills from "../data/skills.json";

function Projects() {
    return (
        <div id="ProjectsSection" className="section">
            <h1 className="text-3xl font-semibold m-auto text-center">Featured Projects</h1>
            <div className="mt-8 grid auto-rows-max grid-cols-1 gap-5 md:grid-cols-2 md:gap-y-7 lg:grid-cols-3 lg:px-7 xl:grid-cols-4 xl:px-0">
                {
                    projects.map((project, i) => 
                        project.featured && <ProjectCard
                            title={project.title}
                            imageSource={project.imageSource}
                            github={project.github || ""}
                            link={project.link || ""}
                            text={project.text}
                        >
                            {project.skills && project.skills.map((skill) => {
                                
                                let skillObject = skills.find(({ name }) => name == skill.name);
                                let textColor = "white";
                                
                                if (skillObject) {
                                    textColor = skillObject.textColor;
                                } else {
                                    let m = skill.color.substring(1).match(skill.color.length == 7 ? /(\S{2})/g : /(\S{1})/g);
                                    if (m) var r = parseInt(m[0], 16), g = parseInt(m[1], 16), b = parseInt(m[2], 16);
    
                                    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    
                                    if (luma > 140) {
                                        textColor = "black";
                                    }
                                }

                                console.log()
                                return <div style={{backgroundColor: `${skillObject ? skillObject.color : skill.color}`, color: `${textColor}`}}
                                            className={"w-fit rounded-full px-2 py-0.5 items-center flex font-semibold text-sm"}>
                                    <span>{skill.name}</span>
                                </div>
                            })}
                        </ProjectCard>
                    )
                }
            </div>
        </div>
    )
}

export default Projects;