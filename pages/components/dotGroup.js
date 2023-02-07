import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-deepsea transition duration-1000 before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-deepsea before:left-[-50%] before:top-[-50%]`;

  const darkSelectedStyles = `relative bg-red transition duration-1000 before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-red before:left-[-50%] before:top-[-50%]`;

  return (
    <div>
      {/* FIXXX THE FUCKING TERNARY STATEMENT*/}
      {selectedPage !== "portfolio" ? (
        <div className="flex flex-col gap-6 fixed -translate-y-20 top-[60%] right-7 z-40">
          <AnchorLink
            href="#home"
            className={`${
              selectedPage === "home" ? selectedStyles : "bg-deepsea opacity-50"
            } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("home")}
          />

          <AnchorLink
            href="#skills"
            className={`${
              selectedPage === "skills" ? selectedStyles : "bg-deepsea opacity-50"
            } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("skills")}
          />

          <AnchorLink
            href="#portfolio"
            className={`${
              selectedPage === "portfolio" ? darkSelectedStyles : "bg-deepsea opacity-50"
            } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("portfolio")}
          />
          
          <AnchorLink
            href="#about"
            className={`${
              selectedPage === "about" ? selectedStyles : "bg-deepsea opacity-50"
            } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("about")}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-6 fixed -translate-y-20 top-[60%] right-7 z-40">
          <AnchorLink
            href="#home"
            className={`${
              selectedPage === "home" ? selectedStyles : "bg-red opacity-50"
            } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("home")}
          />

          <AnchorLink
            href="#skills"
            className={`${
              selectedPage === "skills" ? selectedStyles : "bg-red opacity-50"
            } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("skills")}
          />

          <AnchorLink
            href="#portfolio"
            className={`${
              selectedPage === "portfolio" ? darkSelectedStyles : "bg-red opacity-50"
            } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("portfolio")}
          />

          <AnchorLink
            href="#about"
            className={`${
              selectedPage === "about" ? selectedPage : "bg-red opacity-50"
            } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("portfolio")}
          />
        </div>
      )}
    </div>
  );
};

export default DotGroup;