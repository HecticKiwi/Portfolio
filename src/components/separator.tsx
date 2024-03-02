import { cn } from "../utils/cn";

const Separator = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn("my-8 border-b-[1px] border-b-neutral-700", className)}
      ></div>
    </>
  );
};

export default Separator;
