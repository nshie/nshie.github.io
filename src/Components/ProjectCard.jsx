import githubIcon from "../assets/github.svg";
import externalIcon from "../assets/external.svg";

function ProjectCard({ imageSource, title, text, link="", github="", children }) {
    return (
        <div className="w-full bg-gray-800 overflow-hidden shadow-md flex flex-col justify-between">
            <div>
                <div className="w-full h-52 overflow-hidden">
                    <a href={link || github} target="_blank" rel="noreferrer noopener">
                        <img className="w-full h-52 object-cover hover:scale-110 transition-all duration-500" src={imageSource} />
                    </a>
                </div>
                <div className="p-4 bg-gray-800">
                    <h1 className="text-lg text-primary">
                        {title}
                    </h1>
                    <section className="text-[0.96rem] mt-2 text-tertiary">
                        <span>{text}</span>
                    </section>
                </div>
            </div>
            <div className="flex justify-between items-center px-4 pb-4">
                {children && <div className="flex justify-start flex-wrap items-end gap-2">
                    {children}
                </div>}
                <div className="flex items-end h-full ml-2">
                    {github && <a href={github} target="_blank" rel="noreferrer noopener">
                        <img src={githubIcon} className="min-w-7 min-h-7 max-w-7 max-h-7 hover:scale-110 transition-transform"></img>
                    </a>}
                    {link && <a href={link} target="_blank" rel="noreferrer noopener">
                        <img src={externalIcon} className="min-w-7 min-h-7 max-w-7 max-h-7 hover:scale-110 transition-transform"></img>
                    </a>}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;