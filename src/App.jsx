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
      <div className="max-w-screen-xl mx-auto px-4 md:p-0">
	  	<Navbar
			aboutId={aboutId}
			skillsId={skillsId}
			projectsId={projectsId}
		/>
		<div id={aboutId + "Anchor"}></div>
		<About />
		<div id={skillsId + "Anchor"} className="mb-36 md:mb-16"></div>
		<Skills />
		<div id={projectsId + "Anchor"} className="mt-36"></div>
		<Projects />
		<Footer />
      </div>
    )
}

export default App;
