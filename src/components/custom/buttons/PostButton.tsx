import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type PostButtonProps = {
  children: ReactNode;
  to: string;
  className?: string;
};

const PostButton = ({ children, to, className, ...rest }: PostButtonProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "group relative flex items-center gap-2 px-5 py-3 rounded-lg duration-400 hover:text-primary-300 text-primary-400 font-semibold hover:bg-primary-500/10 transition",
        className
      )}
      {...rest}
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0  bg-primary-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </Link>
  );
};

export default PostButton;

<a
  href="#contact"
  className="flex items-center gap-2 px-5 py-3 rounded-lg border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500/10 transition"
>
  Let’s Talk
</a>;
