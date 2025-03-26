import { useRef, MouseEvent as ReactMouseEvent } from "react";
import classes from "./ProtectedLayoutV2.module.css";
import { NavBar } from "../NavBar/NavBar";

const ProtectedLayoutV2 = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const startResizing = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const onMouseMove = (e: MouseEvent) => {
      if (!sidebarRef.current) return;
      const width = Math.min(Math.max(e.clientX, 75), 350);
      sidebarRef.current.style.width = `${width}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className={classes.app}>
      <div className={classes.sidebar} ref={sidebarRef}>
        <NavBar />
        <div className={classes.resizer} onMouseDown={startResizing}></div>
      </div>
      <div className={classes.mainContent}></div>
    </div>
  );
};

export default ProtectedLayoutV2;
