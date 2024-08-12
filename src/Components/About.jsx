import Me from '../assets/monochrome-profile.jpg';

function About() {
    return (
        <div id="Profile" className="section mt-20 md:mt-0">
            <div className="flex flex-col max-w-screen-lg md:flex-row md:h-screen justify-around section items-center tracking-tight m-auto">
                <div className="flex flex-col items-center text-left md:items-start">
                    <div>
                        <h1 className="text-6xl font-bold mt-auto text-primary">Nathan Shie</h1>
                        <h2 className="text-2xl mt-4 text-secondary">Computer Engineering Student<br></br>at UC San Diego</h2>
                    </div>
                </div>
                <img src={Me} className="w-80 h-80 object-cover object-left-top rounded-full mt-10 md:mt-0"></img>
            </div>
        </div>
    )
}

export default About;