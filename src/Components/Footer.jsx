import GithubIcon from '../assets/github-mark.svg';
import MailIcon from '../assets/mail.svg';
import LinkedinIcon from '../assets/linkedin.svg'
import MapMarkerIcon from '../assets/map-marker.svg'

function Footer() {
    return (
        <div className="section mt-16 text-sm">
            <div className="flex justify-center h-10 items-center text-secondary">
                <a className="mr-6 inline-flex items-center" href="mailto:njshie@gmail.com">
                    <img src={MailIcon} alt="Mail" className="w-5 h-5 mr-1 translate-y-0.5"></img>
                    <span>njshie@gmail.com</span>
                </a>
                <a className="mr-6 inline-flex items-center" href="https://www.linkedin.com/in/nathan-shie/">
                    <img src={LinkedinIcon} alt="LinkedIn" className="w-5 h-5 mr-1"></img>
                    <span>LinkedIn</span>
                </a>
                <a className="mr-6 flex items-center" href="https://github.com/nshie">
                    <img src={GithubIcon} alt="Github" className="w-5 h-5 mr-1"></img>
                    <span>Github</span>
                </a>
                <a className="flex items-center">
                    <img src={MapMarkerIcon} alt="Github" className="w-6 h-6 mr-1"></img>
                    <span>CA</span>
                </a>
            </div>
        </div>
    )
}

export default Footer;