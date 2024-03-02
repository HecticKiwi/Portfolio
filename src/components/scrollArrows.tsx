const ScrollArrows = () => {
  return (
    <>
      <a
        id="scroll"
        className="absolute inset-x-0 bottom-12 mx-auto h-16 w-8"
        href="#about"
      >
        <span className="absolute top-0 h-4 w-4 origin-top-left rotate-45 animate-pulse border-b border-r "></span>
        <span className="absolute top-4 h-4 w-4 origin-top-left rotate-45 animate-pulse border-b border-r [animation-delay:250ms]"></span>
        <span className="absolute top-8 h-4 w-4 origin-top-left rotate-45 animate-pulse border-b border-r [animation-delay:500ms]"></span>
      </a>
    </>
  );
};

export default ScrollArrows;
