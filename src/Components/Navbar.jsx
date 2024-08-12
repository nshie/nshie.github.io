import logo from '../assets/logo.png';
import { useState, useLayoutEffect } from 'react';

function Navbar({ aboutId, projectsId, skillsId, contactId }) {
    const ids = [aboutId, skillsId, projectsId];
    const activeId = useScrollspy(ids, 280);

    console.log(ids);

    return (
        <nav className="sticky top-0">
            <div className="md:-mb-20 h-20 hidden md:flex items-center justify-between p-4 text-center text-xl backdrop-blur-sm">
                <div className="flex justify-between">
                    <h1 className="text-primary">Nathan Shie</h1>
                </div>
                <div className="text-md text-primary font-extralight">
                    {ids.map((id) => {
                        let style = "text-secondary"
                        if (id === activeId) {
                            style = "text-primary border-b border-accent"
                        }
                        return <a key={id} className={"py-1 mr-4 hover:text-primary " + style} href={`#${id}Anchor`}>{id}</a>
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

const clamp = (value) => (Math.max(0, value));
const isBetween = (value, floor, ceil) => (value >= floor && value <= ceil);

const useScrollspy = (ids, offset = 0) => {
    const [activeId, setActiveId] = useState("");
  
    useLayoutEffect(() => {
      const listener = () => {
        const scroll = window.scrollY;
  
        const position = ids
          .map((id) => {
            const element = document.getElementById(id);
  
            if (!element) return { id, top: -1, bottom: -1 };
  
            const rect = element.getBoundingClientRect();
            const top = clamp(rect.top + scroll - offset);
            const bottom = clamp(rect.bottom + scroll - offset);
  
            return { id, top, bottom };
          })
          .find(({ top, bottom }) => isBetween(scroll, top, bottom));
  
        if (position?.id) setActiveId(position?.id || "");
      };
  
      listener();
  
      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener);
  
      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }, [ids, offset]);
  
    return activeId;
  };