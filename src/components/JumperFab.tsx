import { useEffect, useState } from "react";

export interface JumperFabProps {
  targetSectionRef: React.RefObject<any>
};

export default function JumperFab({ targetSectionRef }: JumperFabProps) {
  const [isFabVisible, setIsFabVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsFabVisible(!entry.isIntersecting)
    }, { threshold: 0, });

    if (targetSectionRef.current) {
      observer.observe(targetSectionRef.current);
    }

    return () => {
      if (targetSectionRef.current) {
        observer.unobserve(targetSectionRef.current);
      }
    }

  }, []);

  function fabClickHandler() {
    targetSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className={isFabVisible ? "visible" : "invisible"}>
      <div className="fab">
        <button
          className="btn btn-lg btn-secondary"
          onClick={fabClickHandler}
        >
          Projects
        </button>
      </div>
    </div>
  );
}
