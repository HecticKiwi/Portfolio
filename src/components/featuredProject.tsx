import { Code, Eye } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "../utils/cn";
import LinkButton from "./linkButton";

const FeaturedProject = ({
  title,
  subtitle,
  imageSrc,
  summary,
  builtWith,
  builtIn,
  demoHref,
  codeHref,
  reverse,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  summary: string;
  builtWith: ReactNode;
  builtIn: ReactNode;
  demoHref: string;
  codeHref: string;
  reverse?: boolean;
}) => {
  return (
    <>
      <div className="text-xl">
        {/* Header */}
        <h3 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
          {title}
        </h3>
        <p className="mb-8 text-neutral-500">{subtitle}</p>

        <div
          className={cn("flex flex-wrap gap-6", reverse && "flex-row-reverse")}
        >
          {/* Project Image */}
          <div className="relative aspect-video grow basis-[350px] overflow-hidden rounded-xl">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>

          {/* Details */}
          <div className="grow basis-[350px]">
            <p className="text-lg text-neutral-300">{summary}</p>

            <div className="grid grid-cols-2">
              <div>
                <p className="mt-6 text-2xl font-semibold">Built With</p>
                <div className="mt-1 flex flex-wrap gap-2 text-neutral-400">
                  {builtWith}
                </div>
              </div>
              <div>
                <p className="mt-6 text-2xl font-semibold">Built In</p>
                <p className="text-neutral-400">{builtIn}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <LinkButton href={demoHref}>
                <Eye className="h-6 w-6" />
                Demo
              </LinkButton>
              <LinkButton href={codeHref}>
                <Code className="h-6 w-6" />
                Code
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
