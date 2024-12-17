import { useEffect } from "react";

interface FullPageScrollProps {
  sections: string[];
  offsetHeight?: number;
}

export const FullPageScroll: React.FC<FullPageScrollProps> = ({
  sections,
  offsetHeight = 0,
}) => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      const sectionIds = sections.map((id) => document.getElementById(id));
      const currentIndex = sectionIds.findIndex(
        (section) =>
          section &&
          section.getBoundingClientRect().top >= -offsetHeight &&
          section.getBoundingClientRect().top < window.innerHeight / 2
      );

      if (currentIndex === -1) return;

      if (event.deltaY > 0 && currentIndex < sectionIds.length - 1) {
        sectionIds[currentIndex + 1]?.scrollIntoView({
          behavior: "smooth",
        });
      } else if (event.deltaY < 0 && currentIndex > 0) {
        sectionIds[currentIndex - 1]?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [sections, offsetHeight]);

  return null; // This is an invisible logic component
};
