import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
	const aboutId = "Profile";
	const skillsId = "Skills";
	const projectsId = "Projects";
	
	return (
    <div className="px-4 md:p-0">
			<Navbar
				aboutId={aboutId}
				skillsId={skillsId}
				projectsId={projectsId}
			/>
			<div className="max-w-screen-xl mx-auto">
				<div id={aboutId}></div>
				<About />
				<div id={skillsId} className="mb-36 md:mb-24"></div>
				<Skills />
				<div id={projectsId} className="mb-36 md:mb-24"></div>
				<Projects />
				<Footer />
			</div>
		</div>
    )
}

export default App;
