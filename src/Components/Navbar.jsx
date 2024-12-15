import { useState, useLayoutEffect } from 'react';

function Navbar({ aboutId, projectsId, skillsId }) {
    const ids = [aboutId, skillsId, projectsId];
    const activeId = useScrollspy(ids, 260);
    console.log(activeId);
    const [bgAlpha, setBgAlpha] = useState(0);

    useLayoutEffect(() => {
      const listener = () => {
        if (window.scrollY <= 400) {
          setBgAlpha(window.scrollY / 400);
        } else {
          setBgAlpha(1);
        }
      }

      listener();

      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener);

      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    });



    return (
        <nav className="sticky top-0 z-50"
        style={{backgroundColor: `rgba(9, 14, 26, ${bgAlpha})`}}>
            <div className="md:-mb-20 h-20 hidden md:flex items-center justify-between p-4 text-center text-xl max-w-screen-xl mx-auto">
                <div className="flex justify-between">
                    <h1 className="text-primary">Nathan Shie</h1>
                </div>
                <div className="text-md text-primary font-extralight">
                    {ids.map((id) => {
                        let style = "text-secondary"
                        if (id === activeId) {
                            style = "text-primary border-b border-accent"
                        }
                        return <a key={id} className={"py-1 ml-4 hover:text-primary " + style} href={`#${id}`}>{id}</a>
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
            const element = document.getElementById(id + "Section");
  
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