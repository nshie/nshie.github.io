import ProjectCard from "./ProjectCard";
import portfolioImage from "../assets/portolio-profile-page.jpeg";

function Projects() {
    return (
        <div id="Projects" className="section">
            <h1 className="text-3xl font-semibold m-auto text-center">Featured Projects</h1>
            <div className="mt-8 grid auto-rows-max grid-cols-1 gap-5 md:grid-cols-2 md:gap-y-7 lg:grid-cols-3 lg:px-7 xl:grid-cols-4 xl:px-0">
                <ProjectCard
                    imageSource="https://user-images.githubusercontent.com/65916936/131961091-ac390347-2dab-4dee-ab7f-d54b2e6b67e2.jpg"
                    github="https://github.com/nshie/Osprey"
                    title="Osprey - Mechanical Keyboard"
                    text="Ortholinear mechanical keyboard. Custom designed PCB, hand-soldered components, and laser-cut acrylic case. Powered by Atmel ATmega32U4 MCU and QMK."
                >
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#3949AB] items-center flex font-semibold text-sm text-white">
                        <span>C</span>
                    </div>
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#2a5dba] items-center flex font-semibold text-sm text-white">
                        <span>Atmel AVR</span>
                    </div>
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#2c41b8] items-center flex font-semibold text-sm text-white">
                        <span>KiCad</span>
                    </div>
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#b82f2f] items-center flex font-semibold text-sm text-white">
                        <span>FreeCad</span>
                    </div>
                </ProjectCard>

                <ProjectCard
                    imageSource="https://github.com/nshie/synthesizer/raw/main/example.png"
                    title="2xOsc - Digital Synthesizer"
                    github="https://github.com/nshie/synthesizer"
                    text="Real-time digital synthesizer with 2 oscillators and 3 choices of waveform. Applies DSP techniques like FFT and low-pass filtering. Visualize with spectrum analyzer or waveform analyzer."
                >
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#FFD43B] items-center flex font-semibold text-sm text-black">
                        <span>Python</span>
                    </div>
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#3bb837] items-center flex font-semibold text-sm text-black">
                        <span>PyQt</span>
                    </div>
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#4ac3f3] items-center flex font-semibold text-sm text-black">
                        <span>NumPy</span>
                    </div>
                </ProjectCard>

                <ProjectCard
                    imageSource="https://github.com/nshie/CopyPaste/raw/main/Images/top-down.jpg"
                    title="CopyPaste - Bluetooth Keyboard"
                    github="https://github.com/nshie/CopyPaste"
                    text="Bluetooth, split mechanical keyboard. Reversible design with same PCB for both halves. Ports for OLED display, case screw mounts, and LED backlighting. Designed, soldered, and assembled from scratch."
                >
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#2852db] items-center flex font-semibold text-sm text-white">
                        <span>Bluetooth</span>
                    </div>
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#2c41b8] items-center flex font-semibold text-sm text-white">
                        <span>KiCad</span>
                    </div>
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#FFD43B] items-center flex font-semibold text-sm text-black">
                        <span>Python</span>
                    </div>
                </ProjectCard>

                <ProjectCard
                    imageSource={portfolioImage}
                    title="Personal Portfolio"
                    link="https://nshie.github.io"
                    github="https://github.com/nshie/nshie.github.io"
                    text="Personal portfolio website built with React, Javascript, and Tailwind. Features responsive UI design for best mobile and desktop experience."
                >
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#61DBFB] items-center flex font-semibold text-sm text-black">
                        <span>React</span>
                    </div>
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#f0db4f] items-center flex font-semibold text-sm text-black">
                        <span>JavaScript</span>
                    </div>
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#38bdf8] items-center flex font-semibold text-sm text-black">
                        <span>Tailwind</span>
                    </div>
                    <div className="w-fit rounded-full px-2 py-0.5 bg-[#e34c26] items-center flex font-semibold text-sm text-white">
                        <span>HTML</span>
                    </div>
                </ProjectCard>
            </div>
        </div>
    )
}

export default Projects;