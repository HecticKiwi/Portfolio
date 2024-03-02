import { cn } from "@/utils/cn";
import Image from "next/image";

const Skill = ({ skill, src }: { skill: string; src: string }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className={cn("relative h-10 w-12 shrink-0 overflow-hidden")}>
          <Image src={src} alt={src} fill className="" />
        </div>
        {skill}
      </div>
    </>
  );
};

export default Skill;
