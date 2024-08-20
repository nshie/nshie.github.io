import javaIcon from "../assets/java.svg";
import pythonIcon from "../assets/python.svg";
import cIcon from "../assets/c-programming.svg";
import jsIcon from "../assets/javascript.svg";
import tsIcon from "../assets/typescript.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import swiftIcon from "../assets/swift.svg";
import reactIcon from "../assets/react.svg";
import nodejsIcon from "../assets/nodejs.svg";
import tailwindIcon from "../assets/tailwind.svg";
import gitIcon from "../assets/git.svg";
import githubIcon from "../assets/github.svg";
import vimIcon from "../assets/vim.svg";

function Skills() {
    return (
        <div id="Skills" className="section">
            <div>
                <h1 className="text-3xl m-auto text-center font-semibold text-primary">Skills</h1>
                <div className="flex flex-wrap justify-center mt-8 max-w-screen-md m-auto">
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#007396] items-center flex font-semibold text-white">
                        <img className="w-5 h-5 mr-1.5" src={javaIcon}></img>
                        <span>Java</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#FFD43B] items-center flex font-semibold text-black">
                        <img className="w-5 h-5 mr-1.5" src={pythonIcon}></img>
                        <span>Python</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#3949AB] items-center flex font-semibold text-white">
                        <img className="w-5 h-5 mr-1.5" src={cIcon}></img>
                        <span>C Language</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#F05138] items-center flex font-semibold text-white">
                        <img className="w-5 h-5 mr-1.5" src={swiftIcon}></img>
                        <span>Swift</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#f0db4f] items-center flex font-semibold text-black">
                        <img className="w-6 h-[1.3rem] mr-1.5 -ml-0.5" src={jsIcon}></img>
                        <span>JavaScript</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#007acc] items-center flex font-semibold text-white">
                        <img className="w-5 h-5 mr-1.5" src={tsIcon}></img>
                        <span>TypeScript</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#e34c26] items-center flex font-semibold text-white">
                        <img className="w-5 h-5 mr-1.5" src={htmlIcon}></img>
                        <span>HTML</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#264de4] items-center flex font-semibold text-white">
                        <img className="w-6 h-6 mr-1.5 ml-[-2px]" src={cssIcon}></img>
                        <span>CSS</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#61DBFB] items-center flex font-semibold text-black">
                        <img className="w-5 h-5 mr-1.5" src={reactIcon}></img>
                        <span>React</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#3d973a] items-center flex font-semibold text-white">
                        <img className="w-5 h-5 mr-1.5" src={nodejsIcon}></img>
                        <span>Node.js</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#38bdf8] items-center flex font-semibold text-black">
                        <img className="w-5 h-5 mr-1.5" src={tailwindIcon}></img>
                        <span>Tailwind</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#F1502F] items-center flex font-semibold text-white">
                        <img className="w-5 h-5 mr-1.5" src={gitIcon}></img>
                        <span>Git</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#32383e] items-center flex font-semibold text-white">
                        <img className="w-5 h-5 mr-1.5" src={githubIcon}></img>
                        <span>Github</span>
                    </div>
                    <div className="w-fit m-1 px-1 py-0.5 bg-[#179A33] items-center flex font-semibold text-white">
                        <img className="w-5 h-5 mr-1.5" src={vimIcon}></img>
                        <span>Vim</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;