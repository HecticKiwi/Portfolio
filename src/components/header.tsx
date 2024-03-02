const Header = ({ text, id }: { text: string; id: string }) => {
  return (
    <>
      <div className="mb-8 flex items-center gap-4">
        <div className="h-[1px] grow bg-gradient-to-r from-transparent to-neutral-700"></div>
        <h2
          id={id}
          className="relative inline-block bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl"
        >
          {text}
        </h2>
        <div className="h-[1px] grow bg-gradient-to-l from-transparent to-neutral-700"></div>
      </div>
    </>
  );
};

export default Header;
