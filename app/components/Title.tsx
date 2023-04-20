import { TitleProps } from "@/lib/types";

export default function Title({ title }: TitleProps) {
  return (
    <div className="pt-20 pb-6">
      <h1 className="flex flex-col justify-center text-center text-5xl font-[800] tracking-tighter sm:flex-row sm:gap-x-3 sm:text-7xl">
        <span className="text-black">{title}</span>
      </h1>
    </div>
  );
}

